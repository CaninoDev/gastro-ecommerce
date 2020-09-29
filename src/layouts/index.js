/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Providers from "../components/providers"

import SEO from "../components/seo"
import Header from "../components/header"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={site.siteMetadata.description} />
        <title>Title</title>
      </Helmet>
      <Providers>
        <SEO
          title="Home"
          keywords={[
            `gatsby`,
            `application`,
            `e-commerce`,
            `restaurant`,
            `stripe`,
          ]}
        />
        <Header siteTitle={site.siteMetadata.title} />
        <main>
          {children}
        </main>
      </Providers>
    </>
  )
}

export default Layout