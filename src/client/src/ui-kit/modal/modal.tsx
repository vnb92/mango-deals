import React, { FC, useRef, useState, useEffect } from 'react'
import { Portal } from '@/ui-kit/portal'
import { CloseButton } from '@/ui-kit/close-button'
import Close from '@/ui-kit/icons/close.svg'
import { VoidFn } from '@/types'
import { classNames } from '@/lib/dom'
import styles from './modal.css'

export const Modal: FC<ModalProps> = ({ children, title, show, onClose }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return show ? (
    <Portal id={'deal-modal'}>
      <div className={classNames(styles.modal)}>
        <div ref={ref} className={styles.content}>
          <header className={styles.header}>
            {!!title && <span>{title}</span>}
            <div className={styles.close}>
              <CloseButton onClick={onClose} />
            </div>
          </header>
          {children}
        </div>
      </div>
    </Portal>
  ) : null
}

export interface ModalProps {
  show: boolean
  onClose?: VoidFn
  title?: string
}
