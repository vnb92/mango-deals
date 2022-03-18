import { useRef, FC } from 'react'
import { createPortal } from 'react-dom'
import { useMount, useUnmount } from '@/hooks'

export const Portal: FC<PortalProps> = ({ children, id }) => {
  const element = useRef(document.createElement('div'))

  useMount(() => {
    element.current.id = id
    document.body.appendChild(element.current)
  })

  useUnmount(() => {
    document.body.removeChild(element.current)
  })

  return createPortal(children, element.current)
}

interface PortalProps {
  id: string
}
