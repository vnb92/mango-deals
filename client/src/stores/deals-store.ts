import { makeAutoObservable } from 'mobx'
import { Deal } from '@/entities/deal'

const mock: Deal[] = [
  { id: '1', date: new Date(), value: 120 },
  { id: '2', date: new Date(), value: 5.99 },
  { id: '3', date: new Date(), value: 10 }
]

class DealsStore implements IDealsStore {
  showModal: boolean = false
  deals: Deal[] = mock

  public constructor () {
    makeAutoObservable(this)
  }

  public openModal = () => {
    this.showModal = true
  }

  public closeModal = () => {
    this.showModal = false
  }

  public addDeal = (deal: Deal) => {
    this.deals.push(deal)
  }

  public removeDeal = (deal: Deal) => {
    this.deals.splice(this.deals.indexOf(deal), 1)
  }
}

export const dealsStore = new DealsStore()

export interface IDealsStore {
  showModal: boolean
  deals: Deal[]
}
