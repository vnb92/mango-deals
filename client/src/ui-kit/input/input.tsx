import React, { FC, InputHTMLAttributes } from "react";
import styles from './input.css'

export const Input: FC<InputProps> = ({ label, type = 'text', value, disabled, autoFocus }) => {
  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input type={type} className={styles.input} value={value} disabled={disabled} autoFocus={autoFocus} />
    </div>
  )
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}
