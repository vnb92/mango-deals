import { useEffect } from "react"
import { VoidFn } from "@/types";

export const useUnmount = (effect: VoidFn): void => {
  useEffect(() => () => effect(), [])
}
