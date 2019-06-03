/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"

import './layout.css'

type Props = {
  children: React.ReactNode
}

const LayoutMain = styled.main`
  height: calc(100% - 74px);
  position: relative;
`

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </>
    )}
  />
)

export default Layout
