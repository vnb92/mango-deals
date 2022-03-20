import React, {FC, useEffect, useState} from 'react'
import { observer } from 'mobx-react'
import { Chart, ChartConfiguration, ChartRefHandler } from '@/chart'
import { Nullable } from '@/types'
import { dealsStore, chartStore } from '@/stores'
import { Deal } from '@/entities/deal'

export const MangoChart: FC = observer(() => {
  const { deals } = dealsStore
  const [config, setConfig] = useState<Nullable<any>>({})

  useEffect(() => {
    setConfig(getConfig(deals))
  }, [deals])

  const handleRef: ChartRefHandler = (chart) => {
    chartStore.setChart(chart)
  }

  return (
    <Chart config={config} onRef={handleRef} />
  )
})

const getConfig = (deals: Deal[]): ChartConfiguration => {
  const axis = {
    crosshair: {
      enabled: true,
      snapToDataPoint: false,
      color: '#346D8D',
      lineDashType: 'solid',
      label: ''
    },
    lineColor: "rgba(235, 245, 248, 0.05)",
    tickColor: "transparent",
    tickLength: 0,
    gridColor: "rgba(235, 245, 248, 0.05)",
    gridThickness: 1,
    labelFormatter: function () {
      return ''  
    }
  }

  return ({
    title: {},
    animationEnabled: true,
    theme: "dark1",
    backgroundColor: "transparent",
    colorSet: "#00A3FF",
    axisX: axis,
    axisY: axis,
    data: [{
      type: "line",
      lineThickness: 4,
      dataPoints: deals.map(({ date, value }) => ({ x: date, y: value }))
    }]
  })
}
