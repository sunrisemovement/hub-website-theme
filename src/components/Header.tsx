import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import PrimaryLogo from '../images/sunrise-logo-primary.svg'
import Surface from './Surface'

type Props = {
  siteTitle: string
}

const HeaderWrap = styled.header`
  z-index: 2;
  position: relative;
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  padding: 16px 0;
`

//#region Logo

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoImageWrap = styled.div`
  width: 24px;
  height: min-content;
  fill: var(--color-yellow);
  margin-right: 8px;
  svg {
    height: auto;
    display: block;
  }
`

const LogoTextWrap = styled.div`
  color: var(--color-yellow);
`

const LogoTextUpper = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
`

const LogoTextLower = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 1;
`

const Logo = () => (
  <LogoContainer>
    <LogoImageWrap><PrimaryLogo /></LogoImageWrap>
    <LogoTextWrap>
      <LogoTextUpper>Sunrise Movement</LogoTextUpper>
      <LogoTextLower>Anytown, PA</LogoTextLower>
    </LogoTextWrap>
  </LogoContainer>
)

//#endregion



const Header = ({ siteTitle }: Props) => (
  <HeaderWrap>
    <Surface elevation="4dp" radius={0}>
      <InnerContainer>
        <Logo />
      </InnerContainer>
    </Surface>
  </HeaderWrap>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
