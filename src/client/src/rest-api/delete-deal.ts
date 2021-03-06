import { ResponseInvalidTypeException } from "./response-exception"
import { ApiResponse } from "./types/api-response"
import { config } from "@/config"
import { Deal } from "@/entities/deal"
import { isNumber } from "@/lib/number"
import { isString } from "@/lib/string"
import { isDeal } from "@/entities/deal/is-deal"

export const deleteDeal = (id: string, page = 1, limit = 10): Promise<DeleteDealResponse> => {
  return fetch(`${config.api.deal}/${page}/${id}?limit=${limit}`, { method: 'delete' })
  .then(response => response.json())
  .then(({ hasMore, pagesCount, deals, id }) => {  
    if(isString(id) && isNumber(pagesCount) && Array.isArray(deals)) {
      return ({
        id,
        hasMore,
        pagesCount,
        deals: deals.map(deal => {
          deal.date = new Date(deal.date)
          return deal
        })
      })
    }
  
    throw new ResponseInvalidTypeException()
  })
}

export interface DeleteDealResponse extends ApiResponse {
  id: string,
  deals: Deal[]
}
