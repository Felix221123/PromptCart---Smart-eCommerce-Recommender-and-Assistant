import styled from "styled-components";
import {
  backgroundImage,
  flexCenter,
  fontSize15px,
  fontSize18px,
  fontSize24px,
  fontSize36px,
  fontSize60px,
  SizeofOriginalContentsForDevicesMoreThan1440px,
} from "../mixin";
import HeroBgImage from "../../assets/image/hero-bg.jpg"



export const HeroSectionContainer = styled.div`
    ${backgroundImage(HeroBgImage)};
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99999;
`



export const SiteHeader = styled.header`
    ${SizeofOriginalContentsForDevicesMoreThan1440px};
    ${flexCenter("row", "space-between")};
    padding: 1rem 1.5rem;

    @media (min-width:768px) {
        padding: 1.75rem 2rem;
    }

    > header {
      ${fontSize15px};
      color: ${props => props.theme.colors.greyishBlack};

      @media (min-width:768px) {
          ${fontSize24px};
      }
    }

    > .userProfile {
      ${flexCenter("row", "center")};
      gap: 2rem;

      > img {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
        border-radius: 50%;
      }

      > img.liked-items {
        @media (max-width: 767px) {
          display: none;
        }
      }
    }

`

export const TextSection = styled.div`
    ${flexCenter("column", "center")};
    padding: 6rem 0 2.5rem 0rem;
    text-align: center;

    > .hero-header {
      ${fontSize60px};

      @media (max-width: 767px) {
        ${fontSize36px};
        padding: 0rem 1rem;
      }
    }

`

export const SearchBox = styled.div`
    ${flexCenter("row", "center")};
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background-color: ${props => props.theme.colors.whiteClr};
    border-radius: 5rem;
    position: relative;
    width: 35%;
    height: 4rem;

    @media (max-width: 767px) {
      display: none;
    }

    > img {
      width: 2.5rem;
      height: 2.5rem;
      object-fit: cover;
      position: absolute;
      left: 5%;
      top: 25%;
    }

    > input {
      width: 100%;
      padding: 0.75rem 0.75rem 0.75rem 3rem;
      border: none;
      outline: none;
      background-color: transparent;
      ${fontSize18px};
      color: ${props => props.theme.colors.greyishBlack};
    }
`