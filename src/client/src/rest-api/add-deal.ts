import { config } from "@/config"
import { Deal } from "@/entities/deal"
import { isDeal } from "@/entities/deal/is-deal"
import { ResponseInvalidTypeException } from "./response-exception"
import { ApiResponse } from "./types/api-response"

export const addDeal = (deal: Omit<Deal, 'id'>, page = 1): Promise<AddDealResponse> => {
  return fetch(`${config.api.deal}/${page}`, {
    method: 'post',
    body: JSON.stringify(deal),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(({ deals, hasMore, pagesCount }) => {  
    if(Array.isArray(deals) && isDeal(deals[0])) {
      return ({
        hasMore,
        pagesCount,
        deals: deals.map(deal => {
          deal.date = new Date(deal.date)
          return deal
        })
      })
    }
  
    throw new ResponseInvalidTypeException('response has not deals')
  })
}

export interface AddDealResponse extends ApiResponse {
  deals: Deal[],
}
