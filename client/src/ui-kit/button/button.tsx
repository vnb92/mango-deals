import React, {FC, MouseEventHandler, ButtonHTMLAttributes } from 'react'
import { classNames } from '@/lib/dom'
import { ButtonSize } from './enums/button-size'
import { ButtonTheme } from './enums/button-theme'
import { SizeStyles } from './utils/size-styles'
import { ThemeStyles } from './utils/theme-styles'
import styles from './button.css'

export const Button: FC<ButtonProps> = ({ children, type = 'button', size = ButtonSize.M, theme = ButtonTheme.Primary, onClick }) => {
  return (
    <button type={type} className={classNames(styles.button, SizeStyles[size], ThemeStyles[theme])} onClick={onClick}>
      {children}
    </button>
  )
}

export interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  size?: ButtonSize,
  theme?: ButtonTheme
  onClick?: MouseEventHandler<HTMLButtonElement>
}
