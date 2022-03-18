import { config } from "@/config"
import { Deal } from "@/entities/deal"
import { isDeal } from "@/entities/deal/is-deal"
import { ResponseInvalidTypeException } from "./response-exception"

export const getDeals = (): Promise<Deal[]> => {
  return fetch(config.getDeals)
  .then(response => response.json())
  .then(deals => {  
    if(Array.isArray(deals) && !isDeal(deals[0])) {
      return Promise.resolve(deals)
    }
  
    throw new ResponseInvalidTypeException('response is not a array of deals')
  })
}
