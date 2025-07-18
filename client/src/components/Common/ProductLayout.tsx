import React from 'react'
import { ProductLayoutContainer } from '../../styles/components/ProductLayout'
import { AllCategoriesFilter } from './AllCateogoriesFilter'
import { PriceFilter } from './PriceFilter'
import { useProductContext } from '../../context/products/useProductContext'
import { ProductCard } from './ProductCard'


export const ProductLayout: React.FC = () => {
  const { products , fetchProducts} = useProductContext();

  // fetch products on component mount
  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);





  return (
    <>
    <ProductLayoutContainer>
      <div className="filters">
        <AllCategoriesFilter />
        <PriceFilter />
      </div>
      <div className="mainProductDisplay">
        {products && products.products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </ProductLayoutContainer>
    </>
  )
}

