import React from 'react'
import { TextProps } from '../../interface/ComponentProps'
import { SubHeading } from '../../styles/components/Text'

export const SubHeader: React.FC<TextProps> = ({ text }) => {
  return (
    <>
      <SubHeading>
        {text}
      </SubHeading>
    </>
  )
}
