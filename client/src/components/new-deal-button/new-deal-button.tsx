import React, { FC, useState } from 'react'
import { Button } from '@/ui-kit/button'
import { i18n } from '@/i18n'
import { useToggle } from '@/hooks'
import { DealModal } from '@/components/deal-modal'

export const NewDealButton: FC = () => {
  const [show, toggleShow] = useToggle()

  const handleClick = () => {
    toggleShow()
  }

  const handleClose = () => {
    toggleShow()
  }

  return (
    <>
      <Button onClick={handleClick}>{i18n.newDeal}</Button>
      <DealModal show={show} onClose={handleClose} />
    </>
  )
}
