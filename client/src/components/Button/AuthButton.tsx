import React from 'react'
import { AuthButtonProps } from '../../interface/ComponentProps'
import { AuthButtonStyle } from '../../styles/components/Button'

export const AuthButton: React.FC<AuthButtonProps> = ({ text, onClick , className , type}) => {


  return (
    <>
      <AuthButtonStyle onClick={onClick} className={className} type={type} data-testid="auth-button">
        {text}
      </AuthButtonStyle>
    </>
  )
}

