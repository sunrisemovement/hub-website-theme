import * as React from 'react'
import Styles from './LinkButton.module.css'
import { Link } from 'gatsby'
import Icon from './Icon'

type Props = {
  to: string,
  label: string,
}

export default (props: Props) => (
  <Link className={Styles.link} to={props.to}>
    <span>{props.label}</span>
    <Icon icon="arrow_forward" size={20} />
  </Link>
)