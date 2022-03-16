import { MutableRefObject, useEffect } from 'react'
import { Nullable } from '@/types'

export const useEvent = ({ event, handler, target = window }: UseEventParams): void => {
  useEffect(() => {
    const node = 
    target?.addEventListener(event, handler)

    return () => {
      target?.removeEventListener(event, handler)
    }
  }, [event, handler, target])
}

export interface UseEventParams {
  event: keyof HTMLElementEventMap
  handler: EventListener
  target?: Nullable<HTMLElement> | Window
}
