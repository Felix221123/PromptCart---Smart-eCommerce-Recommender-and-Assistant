// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '../utils/test-utils'
import { ProductCard } from '../components/Common/ProductCard'
import { screen } from '@testing-library/react'



describe('Cart Notification Component', () => {
  it('it should display the cart container with the count', () => {
    const product = {
      "id": "93fe8650-c6d7-4c6b-89de-ff7cf2d9cd75",
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "price": 9.99,
      "stock": 99,
      "category": "beauty",
      "rating": 2.56,
      "warrantyInformation": "1 week warranty",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
      ],
      "shippingInformation": "Ships in 3-5 business days",
      "returnPolicy": "No return policy",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "created_at": "2025-06-19T21:20:23.169Z"
    }
    
    render(<ProductCard {...product} />);

    const productCard = screen.getByTestId("product-card");

    expect(productCard).toBeInTheDocument();
  })

})