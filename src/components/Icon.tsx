import * as React from 'react'
import Styles from './Icon.module.css'

declare module 'react' {
  export interface CSSProperties {
    '--icon-font-size'?: string;
  }
}

type Props = {
  icon: string,
  size?: number
}

export default (props: Props) => (
  <span
    style={{ '--icon-font-size': `${props.size || 24}px` }}
    className={Styles.icon}>
    {props.icon}
  </span>
)