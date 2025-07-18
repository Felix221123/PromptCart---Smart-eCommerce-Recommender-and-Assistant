import React, { useState } from 'react'
import { PriceFilterContainer, PriceInputsContainer, SliderWrapper, Track, RangeInput, PriceInputBox, Pound } from '../../styles/components/PriceFilter'
import { SubHeader } from '../Text/SubHeader'

const MIN = 0;
const MAX = 1000;


export const PriceFilter: React.FC = () => {
  const [minVal, setMinVal] = useState(30);
  const [maxVal, setMaxVal] = useState(600);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.target.value, maxVal - 1);
    setMinVal(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.target.value, minVal + 1);
    setMaxVal(value);
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
              <input type="number" value={minVal} onChange={handleMinChange} />
              <Pound>£</Pound>
            </PriceInputBox>
          </div>

          <div>
            <label>Max price</label>
            <PriceInputBox>
              <input type="number" value={maxVal} onChange={handleMaxChange} />
              <Pound>£</Pound>
            </PriceInputBox>
          </div>
        </PriceInputsContainer>
      </PriceFilterContainer>
    </>
  )
}



