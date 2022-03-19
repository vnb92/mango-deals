import { v4 as uuid } from 'uuid';

class DB implements IDB {
  readonly list: DBItem[] = []

  constructor (list: DBItem[] = []) {
    this.list = list
  }

  push = (item: DBItem) => {
    this.list.push(item)
    return this
  }

  remove = (id: string) => {
    const index = this.list.findIndex((item) => item.id === id)

    if (index > -1) {
      this.list.splice(index, 1)
    }
  
    return this
  }

  get size () {
    return this.list.length
  }

  getPagesCount (limit: number) {
    return Math.ceil(this.size / limit)
  }

  get = (startIndex: number, limit: number) => {  
    return this.list.slice(startIndex, startIndex+limit) 
  }

  getByPage = (page: number, limit: number) => {
    const startIndex = page === 1 ? 0 : (page - 1) * limit
    
    return this.get(startIndex, limit)  
  }
}

export const db = new DB([
  { id: uuid(), date: new Date(), value: 1 },
  { id: uuid(), date: new Date(), value: 2 },
  { id: uuid(), date: new Date(), value: 3 },
  { id: uuid(), date: new Date(), value: 4 },
  { id: uuid(), date: new Date(), value: 5 },
  { id: uuid(), date: new Date(), value: 6 },
  { id: uuid(), date: new Date(), value: 7 },
  { id: uuid(), date: new Date(), value: 8 },
  { id: uuid(), date: new Date(), value: 9 },
  { id: uuid(), date: new Date(), value: 10 },
  { id: uuid(), date: new Date(), value: 11 },
  { id: uuid(), date: new Date(), value: 12 },
])

interface IDB {
  readonly list: DBItem[]
}

interface DBItem extends Record<PropertyKey, any> {
  id: string
}
