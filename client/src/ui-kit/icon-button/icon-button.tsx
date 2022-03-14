import React, { FC, MouseEventHandler } from "react";
import styles from './icon-button.css'

export const IconButton: FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}

export interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}
