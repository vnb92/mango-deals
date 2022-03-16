import React, { FC } from "react"
import { Modal, ModalProps } from "@/ui-kit/modal"

export const DealModal: FC<DealModalProps> = (props) => {
  return <Modal {...props}>deal</Modal>
}

export interface DealModalProps extends ModalProps {}
