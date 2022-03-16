import { useRef, FC } from 'react'
import { createPortal } from 'react-dom'
import { useMount, useUnmount } from '@/hooks'

export const Portal: FC<PortalProps> = ({ children, id }) => {
  const element = document.createElement('div')

  useMount(() => {
    element.id = id
    document.body.appendChild(element)
    
  })

  useUnmount(() => {
    document.body.removeChild(element)
  })

  return createPortal(children, element)
}

interface PortalProps {
  id: string
}
