import React, { FC } from 'react'
import styles from './header.css'
import Mango from '@/ui-kit/icons/mango.svg'
import { i18n } from '@/i18n'
import { NewDealButton } from '@/components/new-deal-button'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Mango />
        <span className={styles.title}>{i18n.appTitle}</span>
      </div>

      <NewDealButton />
    </header>
  )
}
