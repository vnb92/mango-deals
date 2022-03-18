import { makeAutoObservable } from 'mobx'
import { Deal } from '@/entities/deal'
import { getDeals, deleteDeal } from '@/rest-api'

class DealsStore implements IDealsStore {
  showModal: boolean = false
  deals: Deal[] = []
  page: number = 1
  hasMore: boolean = false

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

  public setPage = (page: number) => {
    this.page = page
  }

  public setHasMore = (has: boolean) => {
    this.hasMore = has
  }

  public fetchDeals = (page = 1) => {
    return getDeals(page).then(({ hasMore, deals }) => {
      this.setHasMore(hasMore)
      this.setDeals(deals)
      this.setPage(page)
    })
  }

  public nextDealsPage = () => {
    this.fetchDeals(this.page + 1)
  }

  public previousDealsPage = () => {
    this.fetchDeals(this.page - 1)
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
  hasMore: boolean
  page: number
}
