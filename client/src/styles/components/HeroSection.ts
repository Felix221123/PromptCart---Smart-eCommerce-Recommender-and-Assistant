import styled from "styled-components";
import {
  backgroundImage,
  flexCenter,
  fontSize15px,
  fontSize24px,
  fontSize60px,
  SizeofOriginalContentsForDevicesMoreThan1440px,
} from "../mixin";
import HeroBgImage from "../../assets/image/hero-bg.jpg"



export const HeroSectionContainer = styled.div`
    ${SizeofOriginalContentsForDevicesMoreThan1440px};
    ${backgroundImage(HeroBgImage)};
`



export const SiteHeader = styled.header`
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
    }

`

export const TextSection = styled.div`
    ${flexCenter("column", "center")};
    padding: 13rem 0rem;

    > .hero-header {
      ${fontSize60px};
    }

`