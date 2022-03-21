import React, { FC, KeyboardEventHandler } from 'react'
import { Portal } from '@/ui-kit/portal'
import { CloseButton } from '@/ui-kit/close-button'
import { VoidFn } from '@/types'
import { classNames, PhysicalKeyCode } from '@/lib/dom'
import styles from './modal.css'
import { FadeTransition } from '../animations'

export const Modal: FC<ModalProps> = ({ children, title, show, onClose }) => {
  const handleKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    if(event.code === PhysicalKeyCode.Esc) {
      onClose?.()
    }
  }

  return (
    <Portal id={'deal-modal'}>
      <FadeTransition in={show}>
        <div className={classNames(styles.modal)} onKeyDown={handleKeyDown}>
          <div className={styles.content}>
            <header className={styles.header}>
              {!!title && <span>{title}</span>}
              <div className={styles.close}>
                <CloseButton onClick={onClose} />
              </div>
            </header>
            {children}
          </div>
        </div>
      </FadeTransition>
    </Portal>
  )
}

export interface ModalProps {
  show: boolean
  onClose?: VoidFn
  title?: string
}
