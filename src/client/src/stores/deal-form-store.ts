import { makeAutoObservable } from 'mobx'
import { dealsStore } from './deals-store'

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

    dealsStore.addDeal({
      id: '1', //TODO: id from back
      value: this.value,
      date: this.date
    })

    this.setShowSuccessScreen(true)

    window.setTimeout(() => {
      this.closeModal()
      this.setShowSuccessScreen(false)
    }, 2000)
  }
}

export const dealFormStore = new DealFormStore()

export interface IDealFormStore {
  showModal: boolean
  showSuccessScreen: boolean
  date: Date | null
  value: number
}
