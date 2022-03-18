import { config } from "@/config"
import { Deal } from "@/entities/deal"
import { isDeal } from "@/entities/deal/is-deal"
import { ResponseInvalidTypeException } from "./response-exception"

export const addDeal = (deal: Omit<Deal, 'id'>): Promise<Deal> => {
  return fetch(config.api.deal, {
    method: 'post',
    body: JSON.stringify(deal),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(deal => {  
    if(isDeal(deal)) {
      deal.date = new Date(deal.date)
      return Promise.resolve(deal)
    }
  
    throw new ResponseInvalidTypeException('response is not a deals')
  })
}
