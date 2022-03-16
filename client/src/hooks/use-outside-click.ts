import { RefObject } from 'react'
import { AnyFn, Nullable } from '@/types'
import { useEvent } from './use-event'

export const useOutsideClick = (ref: Nullable<RefObject<HTMLElement>>, handler?: AnyFn): void => {
  const handleClickOutside = (event: Event) => {
    
    if (!ref?.current?.contains(event.target as Node)) {
      handler?.()
    }
  }

  useEvent({ event: 'mousedown', handler: handleClickOutside })
}
