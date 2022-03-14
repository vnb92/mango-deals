import React, {FC} from 'react'
import { Deal } from '@/types'
import { getDate, getTime } from '@/lib/date'
import { formatFractionDigits } from '@/lib/number'
import { classNames } from '@/lib/dom'
import { i18n } from '@/i18n'
import { Table } from '@/ui-kit/table'
import { TrashButton } from '@/ui-kit/trash-button'
import styles from './deals.css'

export const Deals: FC = () => {  
  return (
    <Table>
      <Table.Head>
        <Table.Row className={styles.row}>
          <Table.HeadCell>{i18n.value}</Table.HeadCell>
          <Table.HeadCell>{i18n.dateAndTime}</Table.HeadCell>
        </Table.Row>
      </Table.Head>

      <Table.Body className={styles.body}>
        {mock.map(({ id, value, date }) => (
          <Table.Row key={id} className={styles.row}>
            <Table.Cell>{formatFractionDigits(value)}</Table.Cell>
            <Table.Cell className={styles.dateCell}>{`${getDate(date)} ${getTime(date)}`}</Table.Cell>
            <Table.Cell>
              <div className={styles.action}>
                <TrashButton onClick={() => {}}/>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

const mock: Deal[] = [
  { id: '1', date: new Date(), value: 120 },
  { id: '2', date: new Date(), value: 5.99 },
  { id: '3', date: new Date(), value: 10 }
]
