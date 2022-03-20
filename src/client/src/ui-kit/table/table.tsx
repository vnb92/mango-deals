import React, {FC, forwardRef, ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from 'react'
import { classNames } from '@/lib/dom'
import { CompoundComponent, PropsWithClassName } from '@/lib/component'
import styles from './table.css'

export const Table: CompoundComponent<PropsWithClassName, TableSubComponents> = ({ children, className }) => {  
  return (
    <table className={classNames(styles.table, className)}>{children}</table>
  )
}

Table.Head = ({ children, className }) => {
  return <thead className={classNames(styles.head, className)}>{children}</thead>
}

Table.HeadCell = ({ children, className }) => {
  return <th className={classNames(styles.cell, className)}>{children}</th>
}

Table.Body = ({ children, className }) => {
  return <tbody className={classNames(styles.body, className)}>{children}</tbody>
}
Table.Row = forwardRef(({ children, className }, ref) => {
  return <tr ref={ref} className={classNames(styles.row, className)}>{children}</tr>
})
Table.Cell = ({ children, className }) => {
  return <td className={classNames(styles.cell, className)}>{children}</td>
}

interface TableSubComponents {
  Head: FC<PropsWithClassName>
  HeadCell: FC<PropsWithClassName>
  Body: FC<PropsWithClassName>
  Row: ForwardRefExoticComponent<PropsWithChildren<PropsWithClassName> & RefAttributes<HTMLTableRowElement>>
  Cell: FC<PropsWithClassName>
}
