import React, { FC, ChangeEventHandler } from "react"
import { observer } from "mobx-react"
import { dealFormStore } from "@/stores"
import { NumberInput } from "@/ui-kit/input"

export const ValueInput: FC = observer(() => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.stopPropagation()
    event.preventDefault()
 
    dealFormStore.setDealValue(event.target.value) 
  }

  return (
    <NumberInput value={dealFormStore.value} autoFocus onInput={handleChange}/>
  )
})
