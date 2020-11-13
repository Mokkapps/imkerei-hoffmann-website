import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../layout'
import content from '../content'

import Impression from '../components/Impression'

const ImpressionsPage = ({ data }) => (
  <Layout>
    <section>
      <h1 className="text-center">Einblicke in unsere Bienen-Standorte</h1>
      <p>
        Ich würde mich freuen, wenn Sie meinen Betrieb im Bayerischen Wald
        einmal besuchen. Hier kann ich Ihnen gerne ausführlich über
        Bienenhaltung und Imkereiprodukte Auskunft geben. Wünschen Sie eine
        Besichtigung, allein, mit der Familie oder mit einer Gruppe,{' '}
        <a href="/kontakt">rufen Sie bitte vorher an.</a>
      </p>
      <p>Natürlich dürfen Sie auch alle Produkte probieren!</p>
      <h2 className="text-center">Siegersdorf / Landkreis Straubing-Bogen</h2>
      <div className="flex flex-wrap justify-evenly">
        {content.impressions.siegersdorf.map((impression) => {
          const { imageId, text } = impression
          return <Impression key={imageId} text={text} image={data[imageId]} />
        })}
      </div>
      <h2 className="text-center">Moosbach / Landkreis Regen</h2>
      <div className="flex flex-wrap justify-evenly">
        {content.impressions.moosbach.map((impression) => {
          const { imageId, text } = impression
          return <Impression key={imageId} text={text} image={data[imageId]} />
        })}
      </div>
    </section>
  </Layout>
)

ImpressionsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ImpressionsPage

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    beeHouse01: file(relativePath: { eq: "bienenhaus01.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    beeHouse02: file(relativePath: { eq: "bienenhaus02.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    beeHouse03: file(relativePath: { eq: "bienenhaus03.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    moosbach01: file(relativePath: { eq: "moosbach01.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    moosbach02: file(relativePath: { eq: "moosbach02.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
