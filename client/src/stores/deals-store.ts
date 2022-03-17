import { makeAutoObservable } from 'mobx'
import { Deal } from '@/entities/deal'

class DealsStore implements IDealsStore {
  showModal: boolean = false
  deals: Deal[] = []

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

  public removeDeal = (id: string) => {
    this.deals = this.deals.filter((deal) => deal.id !== id)
  }
}

export const dealsStore = new DealsStore()

export interface IDealsStore {
  showModal: boolean
  deals: Deal[]
}
