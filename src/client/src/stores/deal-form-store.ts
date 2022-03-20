import { makeAutoObservable } from 'mobx'
import { dealsStore } from './deals-store'
import { addDeal } from '@/rest-api'

class DealFormStore implements IDealFormStore {
  showModal: boolean = false
  showSuccessScreen: boolean = false
  date: Date | null = null
  value: number = 100

  public constructor () {
    makeAutoObservable(this)
  }

  public openModal = () => {
    this.showModal = true
  }

  public closeModal = () => {
    this.showModal = false
  }

  public setShowSuccessScreen = (value: boolean) => {
    this.showSuccessScreen = value
  }

  public setCurrentTime = (date: Date) => {
    this.date = date
  }

  public setDealValue = (value: string) => {
    this.value = Number(value)
  }

  public submit = () => {
    if(!this.date || !this.value) return

    const deal = {
      value: this.value,
      date: this.date
    }

    addDeal(deal).then(({ deals, pagesCount, hasMore }) => {
      dealsStore.setDeals(deals)
      dealsStore.setHasMore(hasMore)
      dealsStore.setPagesCount(pagesCount)

      this.setShowSuccessScreen(true)
  
      window.setTimeout(() => {
        this.closeModal()
        this.setShowSuccessScreen(false)
      }, 2000)
    })
  }
}

export const dealFormStore = new DealFormStore()

export interface IDealFormStore {
  showModal: boolean
  showSuccessScreen: boolean
  date: Date | null
  value: number
}
