/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import Styles from './Layout.module.css'

type Props = {
  children: React.ReactNode
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(query)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={Styles.main}>{children}</main>
    </>
  )
}

export default Layout
