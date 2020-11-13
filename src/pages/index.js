import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Layout from '../layout'
import content from '../content'

import Spotlight from '../components/Spotlight'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="flex flex-wrap justify-evenly items-center mb-8 shadow-md bg-primary p-8 rounded-2xl">
      <div className="w-2/3 lg:w-full">
        <h1 style={{ textAlign: 'center' }}>
          Hallo! Mein Name ist Renate Hoffmann.
        </h1>
        <p className="text-center text-lg">
          Ich bin die Imkerin in unserer <strong>Privatimkerei Hoffmann</strong>
          .
        </p>
        <p className="text-center text-lg">
          Die Imkertradition geht in unserer Familie bis in das{' '}
          <strong>Jahr 1890</strong> zurück.
        </p>
        <p className="text-center text-lg">
          Was als Hobby begann, wächst nun immer mehr zu einem{' '}
          <strong>Familienbetrieb</strong> heran.
        </p>
        <p className="text-center text-lg">
          Mit viel <strong>Liebe zur Honigbiene</strong> und großem
          Pflegeaufwand arbeiten wir auf eine nachhaltige Weise mit und an{' '}
          <strong>gesunden Honigbienen</strong>, denn nur gesunde Honigbienen
          sind ein Garant für unsere Zukunft.
        </p>
        <p className="text-center text-lg">
          Auf diesen Seiten können Sie sich über{' '}
          <a href="/produkte">unsere Produkte</a>, unsere Arbeitsweise und{' '}
          <a href="/einblicke">unsere Bienen-Standorte</a> erkundigen. Natürlich
          können sie uns{' '}
          <a href="/kontakt">auch für Bestellungen kontaktieren.</a>
        </p>
      </div>
      <Img
        className="rounded-lg mr-4 md:max-w-56"
        fixed={data.me.childImageSharp.fixed}
      />
    </section>
    <section>
      <h1 style={{ textAlign: 'center' }}>Unsere Grundsätze</h1>
      <section className="flex flex-wrap justify-evenly">
        {content.spotlight.map((item) => {
          const { imageId, text } = item
          return <Spotlight key={imageId} text={text} image={data[imageId]} />
        })}
      </section>
    </section>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bees: file(relativePath: { eq: "bees.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    regional: file(relativePath: { eq: "regional.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    honey: file(relativePath: { eq: "honey.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
