import React, {useState} from 'react'
import { HeroSectionContainer, SearchBox, SiteHeader } from '../../styles/components/HeroSection'
import { CartNotification } from './CartNotif'
import UserProfile from "@/assets/svg/user-profile.svg"
import SearchIcon from "@/assets/svg/search.svg"
import LikedCart from "@/assets/svg/liked.svg"
import { useNavigate } from 'react-router-dom'

interface HeroSectionProps {
  onSearch: (query: string) => void;
}


export const HeroSection: React.FC<HeroSectionProps> = ({onSearch}) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>('');

  // handle navigation to login page
  const handleNavigation = (route: string | undefined) => {
    if (route === undefined) {
      route = 'login';
    }
    navigate(`/${route}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    onSearch(query);
  };


  return (
    <>
      {/* home hero bg */}
      <HeroSectionContainer>
        <SiteHeader>
          <header
            className='font-bold cursor-pointer'
            onClick={() => handleNavigation('home')}
            data-testid="site-header"
          >
            PromptCart
          </header>

          {/* search box */}
          <SearchBox>
            <img src={SearchIcon} alt="search tab" />
            <input
              type="search"
              placeholder='what are you looking for'
              autoComplete='on'
              autoCorrect='on'
              data-testid="search-input"
              value={inputValue}
              onChange={handleInputChange}
            />
          </SearchBox>

          {/* user profile */}
          <div className="userProfile">
            <img
              className='cursor-pointer user-profile'
              src={UserProfile}
              alt="user profile"
              data-testid="user-profile"
            />
            <img
              className='cursor-pointer liked-items'
              src={LikedCart}
              alt="liked items section"
              data-testid="liked-items"
            />
            <CartNotification count={0} />
          </div>
        </SiteHeader>
      </HeroSectionContainer>
    </>
  )
}

