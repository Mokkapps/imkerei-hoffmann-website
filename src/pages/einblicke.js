import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layout'
import content from '../content'

import Impression from '../components/Impression'

const ImpressionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const MainHeading = styled.h1`
  text-align: center;
`

const SubHeading = styled.h2`
  text-align: center;
`

const ImpressionsPage = ({ data }) => (
  <Layout>
    <section>
      <MainHeading>Einblicke in unsere Bienen-Standorte</MainHeading>
      <p>
        Ich würde mich freuen, wenn Sie meinen Betrieb im Bayerischen Wald
        einmal besuchen. Hier kann ich Ihnen gerne ausführlich über
        Bienenhaltung und Imkereiprodukte Auskunft geben. Wünschen Sie eine
        Besichtigung, allein, mit der Familie oder mit einer Gruppe,{' '}
        <a href="/kontakt">rufen Sie bitte vorher an.</a>
      </p>
      <p>Natürlich dürfen Sie auch alle Produkte probieren!</p>
      <SubHeading>Siegersdorf / Landkreis Straubing-Bogen</SubHeading>
      <ImpressionContainer>
        {content.impressions.siegersdorf.map(impression => {
          const { imageId, text } = impression
          return <Impression key={imageId} text={text} image={data[imageId]} />
        })}
      </ImpressionContainer>
      <SubHeading>Moosbach / Landkreis Regen</SubHeading>
      <ImpressionContainer>
        {content.impressions.moosbach.map(impression => {
          const { imageId, text } = impression
          return <Impression key={imageId} text={text} image={data[imageId]} />
        })}
      </ImpressionContainer>
    </section>
  </Layout>
)

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
