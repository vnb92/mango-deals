import React, { createContext, useContext, useEffect, useState, FC } from 'react'
import { throttle } from '@/lib/function'

const ViewportContext = createContext<Viewport>({ height: 0, width: 0 })

export const ViewportProvider: FC = ({ children }) => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    const throttledHandleWindowResize = throttle(handleWindowResize, 100)
  
    handleWindowResize()

    window.addEventListener('resize', throttledHandleWindowResize)

    return () => {
      window.removeEventListener('resize', throttledHandleWindowResize)
    }
  }, [])

  return (
    <ViewportContext.Provider
      value={{ width, height }}
    >
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewport = (): Viewport => {
  const { width, height } = useContext(ViewportContext)
  return { width, height }
}

interface Viewport {
  height: number
  width: number
}
