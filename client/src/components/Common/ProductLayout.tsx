import React from 'react'
import { ProductLayoutContainer } from '@/styles/components/ProductLayout'
import { AllCategoriesFilter } from './AllCateogoriesFilter'
import { PriceFilter } from './PriceFilter'
import { useProductContext } from '@/context/products/useProductContext'
import { ProductCard } from './ProductCard'
import { AuthButton } from '../Button/AuthButton'
import { AllProductResponse } from '@/interface/ProductProps'
import { Loading } from './Loading'
import { GetProductsByCategoryAndPrice }  from "@/packages/api/products/GetProductsByCategoryAndPrice"


export const ProductLayout: React.FC = () => {
  const { products, fetchProducts } = useProductContext();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<AllProductResponse | null>(null);
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

  console.log(selectedCategories, ' here is a list of the selected categories');

  const handleProductCategorySelection = async (category: string[],minPrice: number, maxPrice: number) => {
    if (category.length === 0) {
      setFilteredProducts(null);
      fetchProducts();
      return;
    }

    // clears previous products
    setFilteredProducts(null);
    setLoading(true);

    try {
      // fetch products by categories
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

  // product list to show
  const productsToDisplay = filteredProducts?.products ?? products?.products ?? [];


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
            <p className='no-product text-center font-bold text-2xl'>No products found.</p>
          )}
          <>
          </>
        </div>
      </ProductLayoutContainer>
    </>
  )
}

