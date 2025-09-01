// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '../utils/test-utils'
import { HeroSection } from '../components/Common/HeroSection'
import { screen } from '@testing-library/react'



describe('Hero Section Component', () => {
  it('it should display the hero section', () => {
    render(<HeroSection onSearch={() => { }} />);

    const siteHeader = screen.getByTestId("site-header");

    expect(siteHeader).toHaveTextContent("PromptCart");

    const searchBox = screen.getByTestId("search-input");

    expect(searchBox).toBeInTheDocument();

    const userProfile = screen.getByTestId("user-profile");
    const likedProducts = screen.getByTestId("liked-items");

    expect(userProfile).toBeInTheDocument();
    expect(likedProducts).toBeInTheDocument();
  })

})