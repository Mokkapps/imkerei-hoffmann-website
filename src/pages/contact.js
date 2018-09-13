import React from 'react'
import styled from 'styled-components'

import Layout from '../layout'
import GoogleMap from '../components/GoogleMap'

const Contact = styled.div`
  padding: 1rem;
  background-color: lightgray;
  border-radius: 10px;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledText = styled.p`
  font-weight: bold;
`

const ContactPage = () => (
  <Layout>
    <h1>Kontakt</h1>
    <Contact>
      <StyledText>Renate Hoffmann</StyledText>
      <StyledText>Pfarrhofstraße 7</StyledText>
      <StyledText>94267 Prackenbach</StyledText>
      <StyledText>Telefon: 09944/2283</StyledText>
      <a href="mailto:kontakt@hoffmann-imkerei.de">
        kontakt@hoffmann-imkerei.de
      </a>
    </Contact>
    <GoogleMap/>
  </Layout>
)

export default ContactPage
