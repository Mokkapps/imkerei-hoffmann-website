import React from 'react'
import styled from 'styled-components'

import Layout from '../layout'
import GoogleMap from '../components/GoogleMap'
import ContactForm from '../components/ContactForm'

const Contact = styled.div`
  padding: 1rem;
  background-color: lightgray;
  border-radius: 10px;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

const StyledText = styled.p`
  font-weight: bold;
`

const ContactSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
`;

const ContactPage = () => (
  <Layout>
    <h1>Kontakt</h1>
    <ContactSection>
      <Contact>
        <StyledText>Renate Hoffmann</StyledText>
        <StyledText>Pfarrhofstraße 7</StyledText>
        <StyledText>94267 Prackenbach</StyledText>
        <StyledText>Telefon: 09944/2283</StyledText>
        <a href="mailto:kontakt@hoffmann-imkerei.de">
          kontakt@hoffmann-imkerei.de
        </a>
      </Contact>
      <ContactForm />
    </ContactSection>
    <GoogleMap />
  </Layout>
)

export default ContactPage
