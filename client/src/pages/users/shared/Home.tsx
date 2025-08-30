import React, { useState } from 'react'
import { HeroSection } from '../../../components/Common/HeroSection'
import { ProductLayout } from '../../../components/Common/ProductLayout'

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      {/* hero section */}
      <HeroSection
        onSearch={setSearchQuery}
      />
      <ProductLayout
        searchQuery={searchQuery}
      />
    </>
  )
}


