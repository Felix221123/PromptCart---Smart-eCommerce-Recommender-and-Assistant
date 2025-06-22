import React from 'react'
import { AuthButtonProps } from '../../interface/ComponentProps'
import { AuthButtonStyle } from '../../styles/components/Button'

export const AuthButton: React.FC<AuthButtonProps> = ({ text, onClick , className}) => {


  return (
    <>
      <AuthButtonStyle onClick={onClick} className={className}>
        {text}
      </AuthButtonStyle>
    </>
  )
}

