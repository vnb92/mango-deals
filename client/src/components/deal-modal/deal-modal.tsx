import React, { FC } from "react"
import { Modal, ModalProps } from "@/ui-kit/modal"
import { Input } from "@/ui-kit/input"
import { Button } from "@/ui-kit/button"
import styles from './deal-modal.css'

export const DealModal: FC<DealModalProps> = (props) => {
  return (
    <Modal {...props} title="Make a New Deal">
      <div className={styles.content}>
        <form className={styles.form}>
          <Input label="Current Date" type="text" value="28 Jul 2021 15:58" disabled />
          <Input label="Enter value" type="text" value={'299'} autoFocus />
        </form>
        <Button>Procced</Button>
      </div>
    </Modal>
  )
}

export interface DealModalProps extends ModalProps {}
