import { config } from "@/config"
import { Deal } from "@/entities/deal"
import { isDeal } from "@/entities/deal/is-deal"
import { ResponseInvalidTypeException } from "./response-exception"

export const getDeals = (page = 1): Promise<DealsResponse> => {
  return fetch(`${config.api.deals}?page=${page}`)
  .then(response => response.json())
  .then(response => {
    const { deals, hasMore } = response
  
    if(Array.isArray(deals) && isDeal(deals[0])) {
      return ({
        hasMore,
        deals: deals.map(deal => {
          deal.date = new Date(deal.date)
          return deal
        })
      })
    }
  
    throw new ResponseInvalidTypeException('response is not a array of deals')
  })
}

export interface DealsResponse {
  deals: Deal[],
  hasMore: boolean
}
