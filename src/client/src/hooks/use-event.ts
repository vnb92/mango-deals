import { useEffect, RefObject } from 'react'
import { Nullable } from '@/types'

export const useEvent = ({ event, handler, ref }: UseEventParams): void => {
  useEffect(() => {
    ref?.current?.addEventListener(event, handler)

    return () => {
      ref?.current?.removeEventListener(event, handler)
    }
  }, [event, handler, ref])
}

export interface UseEventParams {
  event: keyof HTMLElementEventMap
  handler: EventListener
  ref?: Nullable<RefObject<HTMLElement>>
}
