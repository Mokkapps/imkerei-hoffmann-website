import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  background-color: gold;
  margin-left: 1rem;
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled(Img)`
  border-radius: 100%;
`

const Text = styled.span`
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
`

export default ({ image, text }) => (
  <Container>
    {image ? <Image fixed={image.childImageSharp.fixed} /> : null}
    <Text>{text}</Text>
  </Container>
)
