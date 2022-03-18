import { hasOwnProperty } from "@/lib/object"
import { Deal } from "./types/deal"

export const isDeal = (value: any): value is Deal => {
  return hasOwnProperty(value, 'date') && hasOwnProperty(value, 'value')
}
