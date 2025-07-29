import React from 'react'
import { ProductLayoutContainer } from '../../styles/components/ProductLayout'
import { AllCategoriesFilter } from './AllCateogoriesFilter'
import { PriceFilter } from './PriceFilter'
import { useProductContext } from '../../context/products/useProductContext'
import { ProductCard } from './ProductCard'
import { AuthButton } from '../Button/AuthButton'
import { GetProductByCategories } from '../../packages/api/products/GetProductByCategories'
import { AllProductResponse } from '../../interface/ProductProps'
import { Loading } from './Loading'



export const ProductLayout: React.FC = () => {
  const { products, fetchProducts } = useProductContext();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<AllProductResponse | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  // fetch products on component mount
  React.useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      await fetchProducts();

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    loadProducts();
  }, [fetchProducts]);


  console.log(selectedCategories, ' here is a list of the selected categories');


  const handleProductCategorySelection = async (category: string[]) => {
    if (category.length === 0) {
      setFilteredProducts(null);
      fetchProducts();
      return;
    }

    setLoading(true);
    try {
      const data = await GetProductByCategories(category);

      setTimeout(() => {
        setFilteredProducts(data ?? null);
        setLoading(false); // stop loading after delay
      }, 3000);

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
          <PriceFilter />
          <AuthButton
            text="Apply Filter"
            onClick={() => handleProductCategorySelection(selectedCategories)}
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
            <p className='text-center font-bold text-2xl'>No products found.</p>
          )}
          <>
          </>
        </div>
      </ProductLayoutContainer>
    </>
  )
}

