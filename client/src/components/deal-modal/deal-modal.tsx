import React, { FC, useState, ChangeEventHandler } from "react"
import { dealFormat } from "@/entities/deal"
import { Modal, ModalProps } from "@/ui-kit/modal"
import { Fieldset } from "@/ui-kit/fieldset"
import { TextInput, NumberInput } from "@/ui-kit/input"
import { Button, ButtonSize } from "@/ui-kit/button"
import styles from './deal-modal.css'
import { i18n } from "@/i18n"

export const DealModal: FC<DealModalProps> = (props) => {
  const [value, setValue] = useState(100)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const newNumber = Number(event.target.value)
    const newValue = isNaN(newNumber) ? value : newNumber
    setValue(newValue)    
  }

  return (
    <Modal {...props} title={i18n.makeDeal}>
      <div className={styles.content}>
        <form className={styles.form}>
          <Fieldset label={i18n.currentTime}>
            <TextInput value={dealFormat(new Date())} disabled />
          </Fieldset>
          <Fieldset label={i18n.enterValue}>
            <NumberInput value={value} autoFocus onInput={handleChange}/>
          </Fieldset>
        </form>
        <footer className={styles.footer}>
          <Button size={ButtonSize.L}>{i18n.procced}</Button>
        </footer>
      </div>
    </Modal>
  )
}

export interface DealModalProps extends ModalProps {}
