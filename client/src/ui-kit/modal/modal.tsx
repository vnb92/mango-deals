import React, { FC, useRef, useState, useEffect } from 'react'
import { Portal } from '@/ui-kit/portal'
import { VoidFn } from '@/types'
import { classNames } from '@/lib/dom'
import styles from './modal.css'

export const Modal: FC<ModalProps> = ({ children, show, onClose }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleOutsideClick = (event: Event) => {
    if (!ref.current?.contains(event.target as Node)) {
      onClose?.()
    }
  }

  useEffect(() => {
    if(!show) return

    window?.addEventListener('mousedown', handleOutsideClick)

    return () => {
      window?.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [event, handleOutsideClick])

  return show ? (
    <Portal id={'deal-modal'}>
      <div className={classNames(styles.modal)}>
        <div ref={ref} className={styles.content}>{children}</div>
      </div>
    </Portal>
  ) : null
}

export interface ModalProps {
  show: boolean
  onClose?: VoidFn
}
