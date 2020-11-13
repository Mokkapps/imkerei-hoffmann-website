import React from 'react'
import Button from './Button'

const ContactForm = () => (
  <div className="flex justify-center">
    <form
      name="contact-form"
      action="/success"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      netlify="true"
    >
      <p hidden>
        <label className="m-4 text-main-text">
          Don’t fill this out if you&#39;re human: <input name="bot-field" />
        </label>
      </p>
      <p />
      <p>
        <label htmlFor="name" className="m-4 text-main-text">
          Name
        </label>
        <input name="name" type="text" required />
      </p>
      <p>
        <label htmlFor="email" className="m-4 text-main-text">
          E-Mail
        </label>
        <input name="email" type="email" required />
      </p>
      <p>
        <label htmlFor="message" className="m-4 text-main-text">
          Ihre Nachricht:
        </label>
        <textarea name="message" required />
      </p>
      <div data-netlify-recaptcha="true"></div>
      <div className="mt-4 flex justify-center">
        <Button>Abschicken</Button>
      </div>
    </form>
  </div>
)

export default ContactForm
