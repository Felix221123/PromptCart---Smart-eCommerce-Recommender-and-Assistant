// authentication button props
export interface AuthButtonProps {
  text: string
  onClick: () => void
}

// input component props
export interface InputProps {
  type: string
  placeholder?: string
  label: string
}

// text component props
export interface TextProps {
  text: string
}

// button component props
export interface ButtonProps {
  text?: string
  onClick?: () => void
}


// props for number of items in cart notification
export interface CartNotificationProps {
  count: number
}