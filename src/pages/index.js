import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../layout'
import content from '../content'

import Spotlight from '../components/Spotlight'

const SpotlightContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const CenteredText = styled.p`
  text-align: center;
  font-size: 1.3rem;
`

const AboutSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  background: lightgray;
  padding: 2rem;
  border-radius: 10px;
`

const MeImage = styled(Img)`
  border-radius: 10px;
  margin-right: 1rem;

  @media (max-width: 420px) {
    max-width: 250px;
  }
`

const AboutText = styled.div`
  width: 60%;

  @media (max-width: 823px) {
    width: 100%;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <AboutSection>
      <AboutText>
        <h1 style={{ textAlign: 'center' }}>
          Hallo! Mein Name ist Renate Hoffmann.
        </h1>
        <CenteredText>
          Ich bin die Imkerin in unserer <strong>Privatimkerei Hoffmann</strong>
          .
        </CenteredText>
        <CenteredText>
          Die Imkertradition geht in unserer Familie bis in das{' '}
          <strong>Jahr 1932</strong> zurück.
        </CenteredText>
        <CenteredText>
          Was als Hobby begann, wächst nun immer mehr zu einem{' '}
          <strong>Familienbetrieb</strong> heran.
        </CenteredText>
        <CenteredText>
          Mit viel <strong>Liebe zur Honigbiene</strong> und großem
          Pflegeaufwand arbeiten wir auf eine nachhaltige Weise mit und an{' '}
          <strong>gesunden Honigbienen</strong>, denn nur gesunde Honigbienen
          sind ein Garant für unsere Zukunft.
        </CenteredText>
        <CenteredText>
          Auf diesen Seiten können Sie sich über{' '}
          <a href="/produkte">unsere Produkte</a>, unsere Arbeitsweise und{' '}
          <a href="/einblicke">unsere Bienen-Standorte</a> erkundigen. Natürlich
          können sie uns{' '}
          <a href="/kontakt">auch für Bestellungen kontaktieren.</a>
        </CenteredText>
      </AboutText>
      <MeImage fixed={data.me.childImageSharp.fixed} />
    </AboutSection>
    <section>
      <h1 style={{ textAlign: 'center' }}>Unsere Grundsätze</h1>
      <SpotlightContainer>
        {content.spotlight.map(item => {
          const { imageId, text } = item
          return <Spotlight key={imageId} text={text} image={data[imageId]} />
        })}
      </SpotlightContainer>
    </section>
    <section>
      <h1 style={{ textAlign: 'center', marginTop: '3rem' }}>Newsletter</h1>
      <p style={{ textAlign: 'center'}}>
        Melden Sie sich bei <a href="/newsletter">unserem Newsletter</a> an.
      </p>
      <p style={{ textAlign: 'center'}}>
        Dadurch erhalten Sie automatisch die neuesten Informationen und Angebote
        per E-Mail.
      </p>
    </section>
  </Layout>
)

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
