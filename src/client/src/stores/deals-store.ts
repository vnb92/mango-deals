import { makeAutoObservable } from 'mobx'
import { Deal } from '@/entities/deal'
import { getDeals, deleteDeal } from '@/rest-api'

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

  public setDeals = (deals: Deal[]) => {
    /**
     * on backend: date is always string
     */
    this.deals = deals.map(deal => {
      deal.date = new Date(deal.date)
      return deal
    })
  }

  public fetchDeals = () => {
    getDeals().then(this.setDeals)
  }

  public addDeal = (deal: Deal) => {
    this.deals.push(deal)
  }

  public removeDeal = (deal: Deal) => {
    deleteDeal(deal.id).then((id) => {
      if(deal.id !== id) return
    
      this.deals.splice(this.deals.indexOf(deal), 1)
    })
  }
}

export const dealsStore = new DealsStore()

export interface IDealsStore {
  showModal: boolean
  deals: Deal[]
}
