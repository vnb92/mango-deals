import React, { FC } from "react";
import { IconButton, IconButtonProps } from "../icon-button";
import Trash from "../icons/trash.svg";

export const TrashButton: FC<TrashButtonProps> = (props) => {
  return (
    <IconButton {...props}>
      <Trash />
    </IconButton>
  )
}

export interface TrashButtonProps extends IconButtonProps {}
