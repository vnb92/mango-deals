import React, { FC } from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";
import styles from './input.css'

export const NumberInput: FC<NumberInputProps> = (props) => {
  return (
    <NumberFormat {...props} className={styles.input} />
  )
}

export interface NumberInputProps extends NumberFormatProps {}
