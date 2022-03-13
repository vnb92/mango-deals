import { bigger, Breakpoint } from '@/ui-kit/breakpoints'

export const getChartSize = (viewportWidth: number): ChartSize => {
  const width = viewportWidth

  if(bigger(viewportWidth, Breakpoint.Xxl)) {
    return { width, height: computeHeight(width*0.2) }
  }

  if(bigger(viewportWidth, Breakpoint.Xl)) {
    return { width, height: computeHeight(width*0.25) }
  }

  if(bigger(viewportWidth, Breakpoint.L)) {
    return { width, height: computeHeight(width*0.3) }
  }

  if(bigger(viewportWidth, Breakpoint.M)) {
    return { width, height: computeHeight(width*0.5) }
  }

  if(bigger(viewportWidth, Breakpoint.S)) {    
    return { width, height: computeHeight(width*0.7) }
  }

  return { width, height: computeHeight(width) }
}

const computeHeight = (height: number) => {
  const maxHeight = 380
  return Math.min(height, maxHeight)
}

interface ChartSize {
  width: number
  height: number
}
