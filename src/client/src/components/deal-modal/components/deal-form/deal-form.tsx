import React, { FC, KeyboardEventHandler } from "react"
import { observer } from "mobx-react"
import { TimeInput } from '../time-input'
import { ValueInput } from '../value-input'
import styles from './deal-form.css'
import { dealFormStore } from "@/stores"
import { Fieldset } from "@/ui-kit/fieldset"
import { Button, ButtonSize } from "@/ui-kit/button"
import { i18n } from "@/i18n"
import { PhysicalKeyCode } from "@/lib/dom"

export const DealForm: FC = observer(() => {
  const handleSubmit = () => {
    dealFormStore.submit()
  }

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if(event.code === PhysicalKeyCode.Enter) {
      dealFormStore.submit()
    }
  }

  return (
    <form className={styles.form} onKeyDown={handleKeyDown}>
      <Fieldset label={i18n.currentTime}>
        <TimeInput />
      </Fieldset>
      <Fieldset label={i18n.enterValue}>
        <ValueInput />
      </Fieldset>

      <footer className={styles.footer}>
        <Button size={ButtonSize.L} onClick={handleSubmit}>{i18n.procced}</Button>
      </footer>
    </form>
  )
})
