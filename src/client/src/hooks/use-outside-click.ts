import { RefObject } from 'react'
import { useEvent } from './use-event'
import { AnyFn, Nullable } from '@/types'

export const useOutsideClick = (ref: Nullable<RefObject<HTMLElement>>, handler?: AnyFn): void => {
  const handleClickOutside = (event: Event) => {
    
    if (!ref?.current?.contains(event.target as Node)) {
      handler?.()
    }
  }

  useEvent({ event: 'mousedown', handler: handleClickOutside })
}
