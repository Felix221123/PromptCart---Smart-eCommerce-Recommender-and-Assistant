import styled from "styled-components";
import { flex, flexCenter, SizeofOriginalContentsForDevicesMoreThan1440px } from "../mixin";


export const ProductLayoutContainer = styled.div`
  ${SizeofOriginalContentsForDevicesMoreThan1440px}
  width: 100%;
  ${flex("row")};
  align-items: flex-start;
  gap: 3rem;
  margin-top: 10rem;
  padding: 0rem 2rem;

  @media (max-width: 767px) {
    ${flex("column")};
    gap: 2rem;
  }

  > .filters{
    ${flexCenter("column", "center")};
    align-items: flex-start;
    gap: 2rem;
    position: sticky;
    top: 8rem;

    @media (max-width: 767px) {
      display: none;
    }
  }

  > .mainProductDisplay{
    ${flex("row")};
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    z-index: 1;

    @media (max-width: 767px) {
      ${flexCenter("column", "center")};
      gap: 2rem;
    }
  }
`;