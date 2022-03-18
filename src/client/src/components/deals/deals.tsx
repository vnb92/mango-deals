import React, {FC} from 'react'
import { observer } from 'mobx-react'
import { dealDateFormat, Deal } from '@/entities/deal'
import { formatFractionDigits } from '@/lib/number'
import { i18n } from '@/i18n'
import { Table } from '@/ui-kit/table'
import { TrashButton } from '@/ui-kit/trash-button'
import { dealsStore } from '@/stores'
import { useMount } from '@/hooks'
import styles from './deals.css'

export const Deals: FC = observer(() => {
  useMount(() => dealsStore.fetchDeals())

  return (
    <Table>
      <Table.Head>
        <Table.Row className={styles.row}>
          <Table.HeadCell>{i18n.value}</Table.HeadCell>
          <Table.HeadCell>{i18n.dateAndTime}</Table.HeadCell>
        </Table.Row>
      </Table.Head>

      <Table.Body className={styles.body}>
        {/**
         * @todo add remove animation. Use TransitionGroup.
         **/}
        {dealsStore.deals.map(deal => <Row deal={deal} />)}
      </Table.Body>
    </Table>
  )
})

const Row: FC<RowProps> = observer(({ deal }) => {
  return (
    <Table.Row className={styles.row}>
      <Table.Cell>{formatFractionDigits(deal.value)}</Table.Cell>
      <Table.Cell className={styles.dateCell}>{dealDateFormat(deal.date)}</Table.Cell>
      <Table.Cell>
        <div className={styles.action}>
          <TrashButton onClick={() => dealsStore.removeDeal(deal)}/>
        </div>
      </Table.Cell>
    </Table.Row>
  )
})

interface RowProps {
  deal: Deal
}
