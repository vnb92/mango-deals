import { Deal } from "./types/deal"
import { hasOwnProperty } from "@/lib/object"

export const isDeal = (value: any): value is Deal => {
  return hasOwnProperty(value, 'date') && hasOwnProperty(value, 'value')
}
