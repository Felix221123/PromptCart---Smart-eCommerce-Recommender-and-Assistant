import React, { useState } from 'react'
import { PriceFilterContainer, PriceInputsContainer, SliderWrapper, Track, RangeInput, PriceInputBox, Pound } from '../../styles/components/PriceFilter'
import { SubHeader } from '../Text/SubHeader'
import { PriceFilterProps } from '@/interface/ComponentProps';

const MIN = 0;
const MAX = 1000;


export const PriceFilter: React.FC<PriceFilterProps> =
  ({ minPrice = 5, maxPrice = 200, onPriceChange }) => {
    const [minVal, setMinVal] = useState(minPrice);
    const [maxVal, setMaxVal] = useState(maxPrice);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(+e.target.value, maxVal - 1);
      setMinVal(value);
      onPriceChange(value, maxVal);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(+e.target.value, minVal + 1);
      setMaxVal(value);
      onPriceChange(minVal, value);
    }

    const calcPercent = (value: number) => ((value - MIN) / (MAX - MIN)) * 100;

    return (
      <>
        <PriceFilterContainer>
          {/* header */}
          <SubHeader text="Price range" />

          {/* slider */}
          <SliderWrapper>
            <Track
              style={{
                background: `linear-gradient(
              to right,
              #d3d3d3 ${calcPercent(minVal)}%,
              #00aaff ${calcPercent(minVal)}%,
              #00aaff ${calcPercent(maxVal)}%,
              #d3d3d3 ${calcPercent(maxVal)}%
            )`,
              }}
            />
            <RangeInput
              type="range"
              min={MIN}
              max={MAX}
              value={minVal}
              onChange={handleMinChange}
            />
            <RangeInput
              type="range"
              min={MIN}
              max={MAX}
              value={maxVal}
              onChange={handleMaxChange}
            />
          </SliderWrapper>

          <PriceInputsContainer>
            <div>
              <label>Min price</label>
              <PriceInputBox>
                <input
                  type="number"
                  value={minVal}
                  onChange={handleMinChange}
                />
                <Pound>£</Pound>
              </PriceInputBox>
            </div>

            <div>
              <label>Max price</label>
              <PriceInputBox>
                <input
                  type="number"
                  value={maxVal}
                  onChange={handleMaxChange}
                />
                <Pound>£</Pound>
              </PriceInputBox>
            </div>
          </PriceInputsContainer>
        </PriceFilterContainer>
      </>
    )
  }



