import React, {FC} from 'react'
import { classNames } from '@/lib/dom'
import { ButtonSize } from './enums/button-size'
import { ButtonTheme } from './enums/button-theme'
import { SizeStyles } from './utils/size-styles'
import { ThemeStyles } from './utils/theme-styles'
import styles from './button.css'

export const Button: FC<ButtonProps> = ({ children, size = ButtonSize.M, theme = ButtonTheme.Primary }) => {
  return (
    <button className={classNames(styles.button, SizeStyles[size], ThemeStyles[theme])}>
      {children}
    </button>
  )
}

export interface ButtonProps {
  size?: ButtonSize,
  theme?: ButtonTheme
}
