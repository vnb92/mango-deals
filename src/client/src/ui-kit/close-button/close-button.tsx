import React, { FC, ButtonHTMLAttributes } from "react";
import styles from './close-button.css'
import Close from '@/ui-kit/icons/close.svg'

export const CloseButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick }) => {
  return <button className={styles.button} onClick={onClick}><Close /></button>
}
