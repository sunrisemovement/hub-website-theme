import { Link } from "gatsby"
import React from "react"
import PrimaryLogo from '../images/sunrise-logo-primary.svg'
import Surface from './Surface'
import Styles from './Header.module.css'

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className={Styles.headerWrap}>
    <Surface elevation="4dp" radius={0}>
      <div className={Styles.inner}>
        <div className={Styles.logoContainer}>
          <div className={Styles.logoImageWrap}>
            <PrimaryLogo />
          </div>
          <div className={Styles.logoTextWrap}>
            <div className={Styles.logoTextUpper}>Sunrise Movement</div>
            <div className={Styles.logoTextLower}>Anytown, PA</div>
          </div>
        </div>
        <nav className={Styles.links}>
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#events">Events</a>
        </nav>
      </div>
    </Surface>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
