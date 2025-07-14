import React from 'react'
import { HeroSectionContainer, SiteHeader, TextSection } from '../../styles/components/HeroSection'
import { CartNotification } from './CartNotif'
import UserProfile from "../../assets/svg/user-profile.svg"
import SearchIcon from "../../assets/svg/search.svg"
import LikedCart from "../../assets/svg/liked.svg"
import { Header } from '../Text/Header'
import { Paragraph } from '../Text/Paragraph'


export const HeroSection: React.FC = () => {
  return (
    <>
    {/*  */}
      <HeroSectionContainer>
        <SiteHeader>
          <header className='font-bold'>PromptCart</header>

          {/* search box */}
          <div className="searchBox">
            <img src={SearchIcon} alt="search tab" />
          </div>

          {/* user profile */}
          <div className="userProfile">
            <img className='cursor-pointer' src={UserProfile} alt=" user profile" />
            <img className='cursor-pointer' src={LikedCart} alt="liked items section" />
            <CartNotification count={0} />
          </div>
        </SiteHeader>
        <TextSection>
          <Header text="Your Ideal Shopping is Here" className='hero-header' />
          <Paragraph text="Discover your ideal product as fast as you can without breaking a sweat." />
        </TextSection>
      </HeroSectionContainer>
    </>
  )
}

