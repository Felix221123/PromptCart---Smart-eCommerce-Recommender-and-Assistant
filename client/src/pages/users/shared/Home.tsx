import React from 'react'
import { HeroSection } from '../../../components/Common/HeroSection'
import { ProductHeader } from '../../../components/Common/ProductHeader'
import { ProductCard } from '../../../components/Common/ProductCard'

export const Home: React.FC = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      <ProductHeader />
      <ProductCard />
    </>
  )
}


