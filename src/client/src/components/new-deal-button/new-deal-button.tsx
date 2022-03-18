import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { Button } from '@/ui-kit/button'
import { i18n } from '@/i18n'
import { dealFormStore } from '@/stores'

export const NewDealButton: FC = observer(() => {
  return <Button onClick={dealFormStore.openModal}>{i18n.newDeal}</Button>
})
