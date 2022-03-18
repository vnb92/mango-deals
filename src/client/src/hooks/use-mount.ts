import { useEffect } from "react"
import { VoidFn } from "@/types";

export const useMount = (effect: VoidFn): void => {
  useEffect(() => {
    effect()
  }, [])
}