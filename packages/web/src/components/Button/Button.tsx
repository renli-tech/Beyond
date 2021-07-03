import * as React from 'react'

import { forwardRef } from './forwardRef'

interface ButtonProps {
  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean
  /**
   * If `true`, the button will be styled in its active state.
   */
  isActive?: boolean
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean
  /**
   * The label to show in the button when `isLoading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string
  /**
   * If `true`, the button will take up the full width of its container.
   */
  isFullWidth?: boolean
  /**
   * The html button type to use.
   */
  type?: 'button' | 'reset' | 'submit'
}

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <button ref={ref} className={`beyond-btn ${className}`} {...rest}>
      {children}
    </button>
  )
})

export default Button
