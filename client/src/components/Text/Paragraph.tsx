import React from 'react'
import { TextProps } from '../../interface/ComponentProps'
import { ParagraphStyle } from '../../styles/components/Text'

export const Paragraph: React.FC<TextProps> = ({ text }) => {
  return (
    <>
      <ParagraphStyle>
        {text}
      </ParagraphStyle>
    </>
  )
}

