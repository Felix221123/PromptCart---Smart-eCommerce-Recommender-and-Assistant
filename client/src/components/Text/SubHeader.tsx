import React from 'react'
import { TextProps } from '../../interface/ComponentProps'
import { SubHeading } from '../../styles/components/Text'

export const SubHeader: React.FC<TextProps> = ({ text, className}) => {
  return (
    <>
      <SubHeading className={className}>
        {text}
      </SubHeading>
    </>
  )
}
