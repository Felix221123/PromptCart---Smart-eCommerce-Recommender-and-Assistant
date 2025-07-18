import React from 'react'
import { Header } from '../Text/Header'
import { TextSection } from '../../styles/components/HeroSection'


export const ProductHeader: React.FC = () => {
  return (
    <>
      <TextSection>
        <Header text="Our Products" className='hero-header' />
      </TextSection>
    </>
  )
}

