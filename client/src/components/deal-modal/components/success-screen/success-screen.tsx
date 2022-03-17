import React, { FC, MouseEventHandler } from "react";
import Success from '@/ui-kit/icons/success.svg'
import styles from './success-screen.css'
import { i18n } from "@/i18n";

export const SuccessScreen: FC<SuccessScreenProps> = ({ onClick }) => {
  return (
    <div className={styles.screen} onClick={onClick}>
      <div className={styles.icon}>
        <Success />
      </div>
      <span className={styles.text}>{i18n.dealSuccessfull}</span>
    </div>
  )
}

export interface SuccessScreenProps {
  onClick: MouseEventHandler<HTMLDivElement>
}