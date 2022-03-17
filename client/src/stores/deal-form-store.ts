import { makeAutoObservable } from 'mobx'
import { dealsStore } from './deals-store'

class DealFormStore implements IDealFormStore {
  showModal: boolean = false
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

    this.closeModal()
  }
}

export const dealFormStore = new DealFormStore()

export interface IDealFormStore {
  showModal: boolean
  date: Date | null
  value: number
}
