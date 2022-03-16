import { useReducer, DispatchWithoutAction } from "react"

export const useToggle = (defaultValue = false): [boolean, DispatchWithoutAction] => {
  const [value, toggleValue] = useReducer((value) => !value, defaultValue)
  return [value, toggleValue]
}
