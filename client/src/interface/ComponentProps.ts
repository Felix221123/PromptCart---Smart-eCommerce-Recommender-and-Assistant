import React from "react";

// authentication button props
export interface AuthButtonProps {
  text: string
  onClick?: () => void
  className?: string
  type?: "button" | "reset" | "submit";
}

// input component props
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
  placeholder?: string
  label: string
}

// text component props
export interface TextProps {
  text: string
  className?: string
}

// button component props
export interface ButtonProps {
  text?: string
  onClick?: () => void
  className?: string
}


// props for number of items in cart notification
export interface CartNotificationProps {
  count: number
}