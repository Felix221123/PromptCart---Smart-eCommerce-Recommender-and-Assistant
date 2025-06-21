import React from 'react'
import { TextProps } from '../../interface/ComponentProps'
import { Heading } from '../../styles/components/Text'

export const Header: React.FC<TextProps> = ({ text }) => {
  return (
    <>
      <Heading>
        {text}
      </Heading>
    </>
  )
}

