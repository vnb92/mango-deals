import React, { FC } from "react";
import styles from './fieldset.css'

export const Fieldset: FC<FieldsetProps> = ({ label, children }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}

export interface FieldsetProps  {
  label?: string
}
