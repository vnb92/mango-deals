import React, { FC } from 'react'
import { CSSTransition, CSSTransitionProps } from '../transition'
import styles from './fade.css'

export const FadeTransition: FC<Partial<CSSTransitionProps>> = ({ children, in: inProp }) => (
  <CSSTransition
    in={inProp}
    classNames={{
      enter: styles.fadeEnter,
      enterActive: styles.fadeEnterActive,
      exit: styles.fadeExit,
      exitActive: styles.fadeExitActive
    }}
    /**
     * timeouts must be sync with css
     */
    timeout={{
      enter: 300,
      exit: 300
    }}
    unmountOnExit
  >
    {children}
  </CSSTransition>
)
