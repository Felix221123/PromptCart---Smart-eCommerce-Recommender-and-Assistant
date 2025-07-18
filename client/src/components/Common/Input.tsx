import React from 'react'
import { FormGroup, InputStyle } from '../../styles/components/Input'
import { InputProps } from '../../interface/ComponentProps'
import { CapitaliseFirstLetter } from '../../utils/CapitaliseFirstLetter'
import { ReplaceSpaceInWords } from "../../utils/ReplaceSpace"


export const Input: React.FC<InputProps> = ({ type, placeholder, label, ...rest }) => {
  return (
    <>
      <FormGroup data-testid="formGroup">
        <label htmlFor={ReplaceSpaceInWords(label)} className='font-semibold'>{CapitaliseFirstLetter(label)}</label>
        <InputStyle
          type={type}
          placeholder={placeholder}
          id={ReplaceSpaceInWords(label)}
          autoComplete="on"
          {...rest}
        ></InputStyle>
      </FormGroup>
    </>
  )
}

