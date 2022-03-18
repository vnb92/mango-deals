import React, { FC } from "react"
import { observer } from "mobx-react"
import { dealFormStore } from "@/stores"
import { Fieldset } from "@/ui-kit/fieldset"
import { Button, ButtonSize } from "@/ui-kit/button"
import { i18n } from "@/i18n"
import { TimeInput } from '../time-input'
import { ValueInput } from '../value-input'
import styles from './deal-form.css'

export const DealForm: FC = observer(() => {
  const handleSubmit = () => {
    dealFormStore.submit()
  }

  return (
    <form className={styles.form}>
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
