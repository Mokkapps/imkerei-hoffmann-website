import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;

  form {
    p {
      label,
      input {
        display: block;
      }
    }
  }
`

const Label = styled.label`
  margin: 1rem 0 1rem 0;
  color: black;
`

const Input = styled.input`
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  background: lightgrey;
  padding: 0.25rem 1rem;
  overflow: auto;
  font: inherit;
`

const TextArea = styled.textarea`
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  background: lightgrey;
  padding: 0.25rem 1rem;
  overflow: auto;
  font: inherit;
  padding: 1rem;
  resize: vertical;
  min-height: 150px;
  width: 100%;
`

const Button = styled.button`
  color: black;
  border-radius: 0.25rem;
  border-width: 0px;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  background-color: gold;

  &:hover {
    color: black;
    background-color: rgb(236, 177, 0);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`

const ContactForm = () => (
  <Container>
    <form
      name="contact-form"
      action="/success"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      netlify="true"
    >
      <p hidden>
        <Label>
          Don’t fill this out if you&#39;re human: <input name="bot-field" />
        </Label>
      </p>
      <p />
      <p>
        <Label htmlFor="name">Name</Label>
        <Input name="name" type="text" required />
      </p>
      <p>
        <Label htmlFor="email">E-Mail</Label>
        <Input name="email" type="email" required />
      </p>
      <p>
        <Label htmlFor="message">Ihre Nachricht:</Label>
        <TextArea name="message" required />
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p style={{ marginTop: '1rem' }}>
        <Button>Abschicken</Button>
      </p>
    </form>
  </Container>
)

export default ContactForm
