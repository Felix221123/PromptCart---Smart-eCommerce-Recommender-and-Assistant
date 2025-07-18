import React from 'react'
import { ProductCardContainer } from '../../styles/components/ProductCard';
import Liked from "../../assets/svg/liked.svg"
import LikedProduct from "../../assets/svg/liked-product.svg"
import Star from "../../assets/svg/star-review.svg"
import { Product } from '../../interface/ProductProps';
import { CapitaliseFirstLetter } from '../../utils/CapitaliseFirstLetter';
import ImagePlaceholder from "../../assets/image/image-placeholder.png"



/**
 * This component renders a product card.
 *
 * It renders a product with the following information:
 * - The product image
 * - The product title
 * - The product category
 * - The product price
 * - The product rating
 *
 * The component also handles the wishlist functionality
 * (when the user clicks on the like icon, the icon will change to liked product)
 *
 * @param {Product} props - The product props to be rendered
 * @return {JSX.Element} - The rendered product card
 */
export const ProductCard: React.FC<Product> = ({
  title,
  price,
  images,
  rating,
  category,
}) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  // handle liked wish list product
  const handleLikedProduct = () => {
    setIsLiked(!isLiked);
  };

  const imageSrc = images?.[0]?.startsWith("https") ? images[0] : ImagePlaceholder;



  return (
    <>
      <ProductCardContainer data-testid="product-card">
        <div className="product-image">
          <img src={imageSrc} alt={title} className="product-photo" />
          <img src={isLiked ? LikedProduct : Liked} alt="Product" className='like-icon cursor-pointer' onClick={handleLikedProduct} />
        </div>
        <div className="product-details">
          <div className="productText">
            <article className="product-title font-medium">{title}</article>
            <p className="product-category font-extra-light">{CapitaliseFirstLetter(category)}</p>
          </div>
          <p className="product-price font-semibold">£{price}</p>
        </div>
        <div className="rating">
          <img src={Star} alt="star rating" />
          {/* rating */}
          <span className='font-normal'>{rating}</span>
        </div>

      </ProductCardContainer>
    </>
  )
};