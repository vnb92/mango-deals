import React, { FC } from "react"
import { observer } from "mobx-react"
import { dealFormStore } from "@/stores"
import { TextInput } from "@/ui-kit/input"
import { useInterval, useMount } from "@/hooks"
import { dealDateFormat } from "@/entities/deal"

export const TimeInput: FC = observer(() => {
  useInterval(1000, () => dealFormStore.setCurrentTime(new Date()))

  useMount(() => dealFormStore.setCurrentTime(new Date()))

  return (
    <TextInput value={dealDateFormat(dealFormStore.date)} disabled />
  )
})
