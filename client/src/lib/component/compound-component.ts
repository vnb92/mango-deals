import { FC } from 'react'

export type CompoundComponent<ComponentProps, SubComponents> = FC<ComponentProps> & SubComponents
