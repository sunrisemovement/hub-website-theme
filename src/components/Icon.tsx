import * as React from 'react'
import Styles from './Icon.module.css'

declare module 'react' {
  export interface CSSProperties {
    '--icon-font-size'?: string
    '--icon-color'?: string
  }
}

type Props = {
  icon: string,
  size?: number,
  color?: string,
}

export default (props: Props) => (
  <span
    style={{
      '--icon-font-size': `${props.size || 24}px`,
      '--icon-color': props.color,
    }}
    className={Styles.icon}>
    {props.icon}
  </span>
)