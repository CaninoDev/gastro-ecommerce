import AOS from "aos"
import "aos/dist/aos.css"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import "../../assets/scss/restaurant.scss"
import About from "../components/about"
import Events from "../components/events"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"
import Menu from "../components/menu"
import Providers from "../components/providers"
import SEO from "../components/seo"
import TopBanner from "../components/top-banner"

const Layout = ({ children, location }) => {
  const [scrolled, setScrolled] = useState(false)

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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    window.addEventListener("load", AOS.refresh)
    return () => {
      window.removeEventListener("load", AOS.refresh)
    }
  }, [])

  const scrollRef = useRef()

  // Watch scroll event for top bar effect
  useLayoutEffect(() => {
    const topPosition = scrollRef.current.getBoundingClientRect().top
    const onScroll = () => {
      const scrollPosition = window.scrollY
      if (topPosition < scrollPosition) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div ref={scrollRef}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{site.siteMetadata.title}</title>
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
        <TopBanner isScrolled={scrolled} />
        <Header
          isScrolled={scrolled}
          siteTitle={site.siteMetadata.title}
          location={location}
        />
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <main id="main-container" role="main">
          <Menu />
          <div className="divider" />
          <Events />
          {children}
        </main>
        <Footer />
      </Providers>
    </div>
  )
}

export default Layout
