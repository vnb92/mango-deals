import React, {FC, useCallback, useMemo, memo, useRef} from 'react'
import { observer } from 'mobx-react'
import { dealDateFormat, Deal } from '@/entities/deal'
import { formatFractionDigits } from '@/lib/number'
import { i18n } from '@/i18n'
import { Table } from '@/ui-kit/table'
import { TrashButton } from '@/ui-kit/trash-button'
import { dealsStore, chartStore } from '@/stores'
import { useMount, useEvent } from '@/hooks'
import styles from './deals.css'
import { Button, ButtonTheme } from '@/ui-kit/button'
import { Nullable } from '@/types'

export const Deals: FC = observer(() => {
  const { pageDeals, pagesCount, hasMore, fetchDeals, nextDealsPage } = dealsStore

  useMount(() => fetchDeals())

  const handlePagination = useCallback(() => {
    if(hasMore) {
      nextDealsPage()
    } else {
      fetchDeals(1)
    }
  }, [hasMore])

  const paginationTitle = useMemo<Nullable<string>>(() => {  
    if (!hasMore && pagesCount === 1) {
      return null
    }

    if (!hasMore && pagesCount > 1) {
      return i18n.toStart
    }

    if (hasMore) {
      return i18n.loadNextPage
    }
  
    return null
  }, [hasMore, pagesCount])

  return (
    <div className={styles.deals}>
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
          {pageDeals.map(deal => {
            return <Row key={deal.id} deal={deal} />
          })}
        </Table.Body>
      </Table>

      {paginationTitle && (
        <div className={styles.pagination}>
          <Button onClick={handlePagination} theme={ButtonTheme.Secondary}>
            {paginationTitle}
          </Button>
        </div>
      )}
    </div>
  )
})

const Row: FC<RowProps> = memo(observer(({ deal }) => {
  const ref = useRef<HTMLTableRowElement | null>(null)

  const handler = () => {    
    chartStore.crosshairShowAt(deal)
  }

  useEvent({ event: 'mouseenter', handler, ref })

  return (
    <Table.Row ref={ref} className={styles.row}>
      <Table.Cell>{formatFractionDigits(deal.value)}</Table.Cell>
      <Table.Cell className={styles.dateCell}>{dealDateFormat(deal.date)}</Table.Cell>
      <Table.Cell>
        <div className={styles.remove}>
          <TrashButton onClick={() => dealsStore.removeDeal(deal)}/>
        </div>
      </Table.Cell>
    </Table.Row>
  )
}), (prev, next) => prev.deal.id === next.deal.id)

interface RowProps {
  deal: Deal
}
