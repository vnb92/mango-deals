import { makeAutoObservable } from 'mobx'
import { Deal } from '@/entities/deal'
import { getDeals, deleteDeal } from '@/rest-api'

class DealsStore implements IDealsStore {
  showModal = false
  pageDeals: Deal[] = []
  prevPageDeals: Deal[] = []
  page = 1
  pageLimit = 10
  pagesCount = 1
  hasMore = false
  hoveredDealId = ''

  public constructor () {
    makeAutoObservable(this)
  }

  public openModal = () => {
    this.showModal = true
  }

  public closeModal = () => {
    this.showModal = false
  }

  public setHoveredDealId = (id: string) => {
    this.hoveredDealId = id
  }

  get deals (): Deal[] {
    return this.prevPageDeals.concat(this.pageDeals).reverse().slice(0, this.pageLimit)
  }

  public setDeals = (deals: Deal[]) => {
    if (this.hasMore) {
      this.setPrevDeals(this.pageDeals)
    }

    /**
     * on backend: date is always string
     */
    this.pageDeals = deals.map(deal => {
      deal.date = new Date(deal.date)
      return deal
    })
  }

  private setPrevDeals = (deals: Deal[]) => {
    this.prevPageDeals = deals
  }

  public setPage = (page: number) => {
    this.page = page
  }

  public setPagesCount = (count: number) => {
    this.pagesCount = count
  }

  public setHasMore = (has: boolean) => {
    this.hasMore = has
  }

  public fetchDeals = (page = 1) => {
    getDeals(page).then(({ hasMore, deals, pagesCount }) => {
      this.setDeals(deals)
      this.setPage(page)
      this.setPagesCount(pagesCount)
      this.setHasMore(hasMore)
    })
  }

  public nextDealsPage = () => {
    this.fetchDeals(this.page + 1)
  }

  public removeDeal = (deal: Deal) => {
    deleteDeal(deal.id, this.page, this.pageLimit).then(({id, pagesCount, deals, hasMore }) => {      
      if(deal.id !== id) return

      this.setDeals(deals)
      this.setPagesCount(pagesCount)
      this.setHasMore(hasMore)
    })
  }
}

export const dealsStore = new DealsStore()

export interface IDealsStore {
  showModal: boolean
  pageDeals: Deal[]
  prevPageDeals: Deal[]
  hasMore: boolean
  page: number
  pageLimit: number
  pagesCount: number
  hoveredDealId: string
}
