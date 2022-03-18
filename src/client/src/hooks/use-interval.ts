import { useRef } from "react"
import { useMount, useUnmount } from "@/hooks"
import { VoidFn } from "@/types"

export const useInterval = (timeout: number, callback: VoidFn) => {
  const timer = useRef<number | null>(null)

  useMount(() => {
    timer.current = window.setInterval(callback, timeout)
  })

  useUnmount(() => {
    if(!timer.current) return

    window.clearInterval(timer.current)
  })
}
