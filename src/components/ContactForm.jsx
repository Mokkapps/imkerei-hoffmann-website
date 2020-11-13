import React from 'react'

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
        <input
          name="name"
          type="text"
          required
          className="h-8 rounded-md bg-secondary overflow-auto block"
        />
      </p>
      <p>
        <label htmlFor="email" className="m-4 text-main-text">
          E-Mail
        </label>
        <input
          name="email"
          type="email"
          required
          className="h-8 rounded-md bg-secondary overflow-auto block"
        />
      </p>
      <p>
        <label htmlFor="message" className="m-4 text-main-text">
          Ihre Nachricht:
        </label>
        <textarea
          name="message"
          required
          className="h-8 rounded-md bg-secondary p-4 overflow-auto resize-y min-h-4 w-full"
        />
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p style={{ marginTop: '1rem' }}>
        <button className="text-main-text rounded-md p-4 hover:bg-accent-dark hover:shadow-md">
          Abschicken
        </button>
      </p>
    </form>
  </div>
)

export default ContactForm
