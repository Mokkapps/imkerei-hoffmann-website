import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  margin-left: 1rem;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Image = styled(Img)`
  border-radius: 7px;
`

const Text = styled.p`
  padding: 0.5rem;
`

export default ({ image, text }) => (
  <Container>
    {image ? <Image fluid={image.childImageSharp.sizes} /> : null}
    <Text>{text}</Text>
  </Container>
)
