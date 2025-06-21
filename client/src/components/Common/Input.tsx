import React from 'react'
import { FormGroup, InputStyle } from '../../styles/components/Input'
import { InputProps } from '../../interface/ComponentProps'
import { CapitaliseFirstLetter } from '../../utils/CapitaliseFirstLetter'

export const Input: React.FC<InputProps> = ({ type, placeholder, label }) => {
  return (
    <>
      <FormGroup>
        <label htmlFor={label} className='font-semibold'>{CapitaliseFirstLetter(label)}</label>
        <InputStyle type={type} placeholder={placeholder} id={label}></InputStyle>
      </FormGroup>
    </>
  )
}

