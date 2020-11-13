import React from 'react'

import Layout from '../layout'
import GoogleMap from '../components/GoogleMap'
import ContactForm from '../components/ContactForm'

const ContactPage = () => (
  <Layout>
    <h1>Kontakt</h1>
    <section className="flex flex-wrap content-center items-center justify-evenly">
      <div className="p-4 bg-primary rounded-lg mb-8 shadow-md flex flex-col items-center justify-center">
        <p className="font-bold">Renate Hoffmann</p>
        <p className="font-bold">Pfarrhofstraße 7</p>
        <p className="font-bold">94267 Prackenbach</p>
        <p className="font-bold">Telefon: 09944/2283</p>
        <a
          className="text-center"
          href="mailto:kontakt@privatimkerei-hoffmann.de"
        >
          kontakt@privatimkerei-hoffmann.de
        </a>
      </div>
      <ContactForm />
    </section>
    <section>
      <h2>Standort</h2>
      <GoogleMap />
    </section>
  </Layout>
)

export default ContactPage
