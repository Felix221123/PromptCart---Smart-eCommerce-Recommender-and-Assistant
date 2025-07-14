import styled from "styled-components";
import {
    backgroundImage,
    flexCenter,
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

`