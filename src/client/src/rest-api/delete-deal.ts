import { config } from "@/config"
import { ResponseInvalidTypeException } from "./response-exception"
import { isString } from "lodash"

export const deleteDeal = (id: string): Promise<string> => {
  return fetch(`${config.api.deal}/${id}`, { method: 'delete' })
  .then(response => response.text())
  .then(id => {  
    if(isString(id)) {
      return id
    }
  
    throw new ResponseInvalidTypeException('id is not string')
  })
}
