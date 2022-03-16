import React, { FC, ButtonHTMLAttributes } from "react";
import Close from '@/ui-kit/icons/close.svg'
import styles from './close-button.css'

export const CloseButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick }) => {
  return <button className={styles.button} onClick={onClick}><Close /></button>
}
