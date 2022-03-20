import { makeAutoObservable } from 'mobx'
import { ChartInstance } from '@/chart'
import { Nullable } from '@/types'
import { Deal } from '@/entities/deal'

class ChartStore implements IChartStore {
  chart: Nullable<ChartInstance> = null

  public constructor () {
    makeAutoObservable(this, {
      chart: false
    })
  }

  public setChart = (chart: ChartInstance) => {
    this.chart = chart
  }

  public crosshairShowAt = (deal: Deal) => {
    const axisX = this.chart?.axisX[0]
    const axisY = this.chart?.axisY[0]

    /**
     * @todo remove ts-ignore
     */
    //@ts-ignore
    axisX?.crosshair.showAt(deal.date)
    //@ts-ignore
    axisY?.crosshair.showAt(deal.value)
  }
}

export const chartStore = new ChartStore()

export interface IChartStore {
  chart: Nullable<ChartInstance>
}
