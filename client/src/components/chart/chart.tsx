import React, {FC} from 'react'
import { getChartSize } from './utils/get-chart-size'
import { useViewport } from '@/context/viewport-context'
import styles from './chart.css'

export const Chart: FC = () => {
  const viewport = useViewport()
  const size = getChartSize(viewport.width)

  return (
    <canvas className={styles.chart} width={size.width} height={size.height} />
  )
}


