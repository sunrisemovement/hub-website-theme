import * as React from 'react'
import Styles from './Surface.module.css'

type Elevation =
  | '0dp'
  | '1dp'
  | '2dp'
  | '3dp'
  | '4dp'
  | '6dp'
  | '8dp'
  | '12dp'
  | '16dp'
  | '24dp'

type Props = {
  elevation: Elevation,
  radius: number,
  height: string
}

declare module 'react' {
  export interface CSSProperties {
    '--surface-elevation-shadow'?: string,
    '--surface-elevation-overlay-opacity'?: string,
    '--surface-border-radius'?: string,
    '--surface-height'?: string,
  }
}

const buildStyle = (props: Props): React.CSSProperties => ({
  '--surface-elevation-shadow': `var(--elevation-shadow-${props.elevation})`,
  '--surface-elevation-overlay-opacity': `var(--elevation-overlay-opacity-${props.elevation})`,
  '--surface-border-radius': `${props.radius}px`,
  '--surface-height': props.height,
})

const Surface = (props: React.PropsWithChildren<Props>) => (
  <div className={Styles.container} style={buildStyle(props)}>
    {props.children}
  </div>
)

Surface.defaultProps = {
  height: 'auto',
  radius: 0,
  elevation: '0dp',
}

export default Surface