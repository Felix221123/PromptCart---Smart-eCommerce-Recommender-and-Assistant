import React, { useEffect } from 'react'
import { ProductLayoutContainer } from '@/styles/components/ProductLayout'
import { AllCategoriesFilter } from './AllCateogoriesFilter'
import { PriceFilter } from './PriceFilter'
import { useProductContext } from '@/context/products/useProductContext'
import { ProductCard } from './ProductCard'
import { AuthButton } from '../Button/AuthButton'
import { AllProductResponse } from '@/interface/ProductProps'
import { Loading } from './Loading'
import { GetProductsByCategoryAndPrice } from "@/packages/api/products/GetProductsByCategoryAndPrice"
import { GetProductBySearch } from '@/packages/api/products/GetProductBySearch'
import { ApiError } from '@/interface/ProductProps'

interface ProductLayoutProps {
  searchQuery: string;
}

export const ProductLayout: React.FC<ProductLayoutProps> = ({ searchQuery }) => {
  const { products, fetchProducts } = useProductContext();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<AllProductResponse | null>(null);
  const [searchResults, setSearchResults] = React.useState<AllProductResponse | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [priceRange, setPriceRange] = React.useState<{ min: number; max: number }>({
    min: 0,
    max: 1000,
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  // fetch products on component mount
  React.useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      await fetchProducts();
      setLoading(false);
    };

    loadProducts();
  }, [fetchProducts]);

  // handle price range change
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  // handles the product category and price filtering
  const handleProductCategorySelection = async (category: string[], minPrice: number, maxPrice: number) => {
    if (category.length === 0) {
      setFilteredProducts(null);
      fetchProducts();
      return;
    }

    // clears previous products
    setFilteredProducts(null);
    setLoading(true);

    try {
      // fetch products by categories or price range
      const data = await GetProductsByCategoryAndPrice(category, minPrice, maxPrice);

      // update filtered products
      setFilteredProducts(data ?? null);

    } catch (error) {
      console.error("Error fetching products by categories:", error);
      setFilteredProducts(null);
    } finally {
      setLoading(false);
    }
  }

  // handles the search functionality
  const handleSearch = async (query: string) => {
    if (query === '') {
      setSearchResults(null);
      fetchProducts();
      return;
    }

    setSearchResults(null);
    setLoading(true);

    try {
      const data = await GetProductBySearch(query);
      console.log(data, ' is the data or error');

      // If backend returned an error object
      if (data?.detail) {
        setErrorMessage(data.detail); // e.g. "No relevant results found"
        setSearchResults({ products: [] });
        return;
      }

      // If backend returned empty product list
      if (Array.isArray(data?.products) && data.products.length === 0) {
        setErrorMessage(`No relevant products found for "${query}"`);
        setSearchResults({ products: [] });
        return;
      }

      // Otherwise it's valid data
      setErrorMessage(null);
      setSearchResults(data ?? null);

    } catch (error: unknown) {
      console.error("Error fetching search results:", error);

      const err = error as ApiError; // cast it

      if (err.detail) {
        setErrorMessage(`No relevant products found for "${query}"`);   // <- will now display "No relevant results found"
      } else if (err.status) {
        setErrorMessage(`Request failed with status ${err.status}`);
      } else {
        setErrorMessage("Something went wrong while searching. Please try again.");
      }

      setSearchResults({ products: [] });
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    // check if searchQuery is defined
    if (searchQuery !== undefined) {
      handleSearch(searchQuery);
    }
  }, [searchQuery]);


  // derived state: are we in search mode?
  const isSearching = searchQuery !== '';

  // product list to show
  let productsToDisplay: any[] = [];
  if (isSearching) {
    productsToDisplay = searchResults?.products ?? [];
  } else if (filteredProducts) {
    productsToDisplay = filteredProducts.products ?? [];
  } else {
    productsToDisplay = products?.products ?? [];
  }

  return (
    <>
      <ProductLayoutContainer>
        <div className="filters">
          <AllCategoriesFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <PriceFilter
            minPrice={priceRange.min}
            maxPrice={priceRange.max}
            onPriceChange={handlePriceChange}
          />
          <AuthButton
            text="Apply Filter"
            onClick={() => handleProductCategorySelection(selectedCategories, priceRange.min, priceRange.max)}
            className='filter-btn'
          />
        </div>
        <div className="mainProductDisplay">
          {loading ? (
            <Loading />
          ) : productsToDisplay.length > 0 ? (
            productsToDisplay.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))
          ) : (
            <p className='no-product text-center font-bold text-2xl'>{errorMessage || "No products found."}</p>
          )}
        </div>
      </ProductLayoutContainer>
    </>
  )
}

