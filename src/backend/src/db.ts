import { v4 as uuid } from 'uuid';
import { random } from '@/lib/number';

class DB implements IDB {
  readonly list: DBItem[] = []

  constructor (list: DBItem[] = []) {
    this.list = list
    this.sort()
  }

  add = (item: DBItem) => {
    this.list.unshift(item)
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

  getPagesCount = (limit: number) => {
    return Math.ceil(this.size / limit)
  }

  sort = (prop = 'date') => {
    this.list.sort((a, b) => new Date(b[prop]).getTime() - new Date(a[prop]).getTime())
  }

  get = (startIndex: number, limit: number) => {  
    return this.list.slice(startIndex, startIndex+limit) 
  }

  getByPage = (page: number, limit: number) => {
    const startIndex = page === 1 ? 0 : (page - 1) * limit
    
    return this.get(startIndex, limit)  
  }
}

const randomValue = () => random(100)
export const db = new DB([
  { id: uuid(), date: new Date(), value: randomValue() },
  { id: uuid(), date: new Date(), value: randomValue() },
])

interface IDB {
  readonly list: DBItem[]
}

interface DBItem extends Record<PropertyKey, any> {
  id: string
}
