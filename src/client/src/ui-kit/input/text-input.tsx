import React, { FC, InputHTMLAttributes } from "react";
import styles from './input.css'

export const TextInput: FC<TextInputProps> = (props) => {
  return (
    <input {...props} type={'text'} className={styles.input} />
  )
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
