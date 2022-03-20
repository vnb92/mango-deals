import { config } from "@/config"
import { Deal } from "@/entities/deal"
import { ResponseInvalidTypeException } from "./response-exception"
import { ApiResponse } from "./types/api-response"

export const getDeals = (page = 1): Promise<DealsResponse> => {
  return fetch(`${config.api.deals}?page=${page}`)
  .then(response => response.json())
  .then(response => {
    const { deals, hasMore, pagesCount } = response
  
    if(Array.isArray(deals)) {
      return ({
        hasMore,
        pagesCount,
        deals: deals.map(deal => {
          deal.date = new Date(deal.date)
          return deal
        })
      })
    }
  
    throw new ResponseInvalidTypeException('response is not a array of deals')
  })
}

export interface DealsResponse extends ApiResponse {
  deals: Deal[]
}
