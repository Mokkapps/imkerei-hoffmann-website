import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

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
    render={(data) => (
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
        <div className="flex flex-col min-h-screen">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="p-8 flex-grow">{children}</div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
