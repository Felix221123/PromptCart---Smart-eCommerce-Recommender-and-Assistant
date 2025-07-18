import React from 'react'
import { HeroSectionContainer, SearchBox, SiteHeader } from '../../styles/components/HeroSection'
import { CartNotification } from './CartNotif'
import UserProfile from "../../assets/svg/user-profile.svg"
import SearchIcon from "../../assets/svg/search.svg"
import LikedCart from "../../assets/svg/liked.svg"
import { useNavigate } from 'react-router-dom'

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  // handle navigation to login page
  const handleNavigation = (route: string | undefined) => {
    if (route === undefined) {
      route = 'login';
    }
    navigate(`/${route}`);
  };




  return (
    <>
      {/* home hero bg */}
      <HeroSectionContainer>
        <SiteHeader>
          <header className='font-bold cursor-pointer' onClick={() => handleNavigation('home')}>PromptCart</header>

          {/* search box */}
          <SearchBox>
            <img src={SearchIcon} alt="search tab" />
            <input type="text" placeholder='Search for "gift my 2 year old daughter"' autoComplete='on' autoCorrect='on'/>
          </SearchBox>

          {/* user profile */}
          <div className="userProfile">
            <img className='cursor-pointer user-profile' src={UserProfile} alt=" user profile" />
            <img className='cursor-pointer liked-items' src={LikedCart} alt="liked items section"/>
            <CartNotification count={0} />
          </div>
        </SiteHeader>
      </HeroSectionContainer>
    </>
  )
}

