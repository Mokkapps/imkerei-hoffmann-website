import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import bg from '../images/bg.jpg'

const Aside = styled.aside`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
    url(${bg}) no-repeat center center fixed;
  background-size: cover;
  padding: 2rem;

  flex: 0 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex: 0 0 auto;
  }
`

const About = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.h1`
  color: white;
  text-align: center;
`

const CopyrightText = styled.p`
  color: lightgray;
  font-size: 0.75em;
  margin-bottom: 0.5rem;
`

const Copyright = styled.div`
  position: absolute;
  bottom: 0;
`

const SubHeading = styled.h2`
  color: lightyellow;
  text-align: center;
`

const MeImage = styled(Img)`
  border-radius: 100%;
`

export default ({ image }) => (
  <Aside>
    <About>
      <MeImage fixed={image.childImageSharp.fixed} />
      <Heading>Hallo!</Heading>
      <SubHeading>Mein Name ist Renate Hoffmann</SubHeading>
      <SubHeading>🐝</SubHeading>
      <SubHeading>Ich bin Imkerin aus Leidenschaft</SubHeading>
    </About>
    <Copyright>
      <CopyrightText>© Mokkapps 2018</CopyrightText>
    </Copyright>
  </Aside>
)
