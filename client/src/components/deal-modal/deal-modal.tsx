import React, { FC } from "react"
import { observer } from "mobx-react"
import { dealFormStore } from "@/stores"
import { Modal, ModalProps } from "@/ui-kit/modal"
import { Fieldset } from "@/ui-kit/fieldset"
import { Button, ButtonSize } from "@/ui-kit/button"
import { i18n } from "@/i18n"
import { TimeInput } from './components/time-input'
import { ValueInput } from './components/value-input'
import styles from './deal-modal.css'

export const DealModal: FC = observer(() => {
  const handleClose = () => {
    dealFormStore.closeModal()
  }

  const handleSubmit = () => {
    dealFormStore.submit()
  }

  return (
    <Modal show={dealFormStore.showModal} title={i18n.makeDeal} onClose={handleClose}>
      <div className={styles.content}>
        <form className={styles.form}>
          <Fieldset label={i18n.currentTime}>
            <TimeInput />
          </Fieldset>
          <Fieldset label={i18n.enterValue}>
            <ValueInput />
          </Fieldset>
        </form>
        <footer className={styles.footer}>
          <Button size={ButtonSize.L} onClick={handleSubmit}>{i18n.procced}</Button>
        </footer>
      </div>
    </Modal>
  )
})
