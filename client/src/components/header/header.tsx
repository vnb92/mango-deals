import React, { FC } from 'react'
import Mango from '@/ui-kit/icons/mango.svg'
import { Button } from '@/ui-kit/button'
import { i18n } from '@/i18n'
import styles from './header.css'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Mango />
        <span className={styles.title}>{i18n.appTitle}</span>
      </div>

      <Button>{i18n.newDeal}</Button>
    </header>
  )
}
