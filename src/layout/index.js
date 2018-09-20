import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './layout.scss'

const Content = styled.div`
  padding: 2rem;
  flex-grow: 1;
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Layout = ({ children }) => (
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Alle wichtigen Informationen über die Privatimkerei-Hoffmann',
            },
            {
              name: 'keywords',
              content: 'imkerei, privatimkerei, honig, bienenwachstücher',
            },
          ]}
        >
          <html lang="de" />
        </Helmet>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>{children}</Content>
          <Footer />
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
