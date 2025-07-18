import React from 'react'
import { TextProps } from '../../interface/ComponentProps'
import { SubHeading } from '../../styles/components/Text'

export const SubHeader: React.FC<TextProps> = ({ text, className}) => {
  return (
    <>
      <SubHeading className={className} data-testid="sub-header">
        {text}
      </SubHeading>
    </>
  )
}
