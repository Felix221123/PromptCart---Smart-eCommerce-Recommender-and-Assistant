import styled from "styled-components";
import { flex } from "../mixin";

export const PriceFilterContainer = styled.div`
  ${flex("column")};
  gap: 0.5rem;
  width: 17.82rem !important;
  height: auto;
`;

export const SliderWrapper = styled.div`
  position: relative;
  height: 1rem;
  margin-top: 0.5rem;
`;

export const Track = styled.div`
  position: absolute;
  height: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  border-radius: 3px;
  z-index: 1;
`;

export const RangeInput = styled.input`
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    pointer-events: all;
    -webkit-appearance: none;
    height: 1.25rem;
    width: 1.25rem;
    background: white;
    border: 1px solid #00aaff;
    border-radius: 50%;
    cursor: pointer;
    z-index: 3;
  }

  &::-moz-range-thumb {
    pointer-events: all;
    height: 1.25rem;
    width: 1.25rem;
    background: white;
    border: 1px solid #00aaff;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const PriceInputsContainer = styled.div`
  ${flex("row")};
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

export const PriceInputBox = styled.div`
  ${flex("row")};
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 5rem;
  padding: 0.5rem 2rem;
  background-color: #fff;

  input {
    border: none;
    width: 3.5rem;
    font-size: 1rem;
    text-align: right;
    color: #2f3542;

    &:focus {
      outline: none;
    }
  }
`;

export const Pound = styled.span`
  margin-left: 0.5rem;
  color: #2f3542;
  font-weight: 500;
`;