export const enum Breakpoint {
  Xs = 320,
  S = 375,
  M = 768,
  L = 1024,
  Xl = 1320,
  Xxl = 1720,
}

export const bigger = (width: number, breakpoint: Breakpoint) => width >= breakpoint // like CSS media (min-width)
export const smaller = (width: number, breakpoint: Breakpoint) => width < breakpoint
