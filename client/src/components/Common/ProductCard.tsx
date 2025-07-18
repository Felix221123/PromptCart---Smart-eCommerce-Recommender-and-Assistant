import React from 'react'
import { ProductCardContainer } from '../../styles/components/ProductCard';
import Image from "../../assets/image/hero-bg.jpg"
import Liked from "../../assets/svg/liked.svg"
import LikedProduct from "../../assets/svg/liked-product.svg"
import Star from "../../assets/svg/star-review.svg"


export const ProductCard: React.FC = () => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  // handle liked wish list product
  const handleLikedProduct = () => {
    setIsLiked(!isLiked);
  };





  return (
    <>
      <ProductCardContainer imageUrl={Image} data-testid="product-card">
        <div className="product-image">
          <img src={isLiked ? LikedProduct : Liked} alt="Product" className='like-icon cursor-pointer' onClick={handleLikedProduct}/>
        </div>
        <div className="product-details">
          <div className="productText">
            <article className="product-title font-semibold">Essence Mascara Lash Princess</article>
            <p className="product-category font-extra-light">Beauty</p>
          </div>
          <p className="product-price font-bold">£{99}</p>
        </div>
        <div className="rating">
          <img src={Star} alt="star rating" />
          {/* rating */}
          <span className='font-normal'>4.5</span>
        </div>

      </ProductCardContainer>
    </>
  )
};