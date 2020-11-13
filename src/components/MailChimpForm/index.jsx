import React from 'react'
import Mailchimp from 'react-mailchimp-form'

import './styles.css'

export default () => (
  <section>
    <h3>Newsletter-Anmeldung</h3>
    <Mailchimp
      action="https://mokkapps.us19.list-manage.com/subscribe/post?u=587746a905932c04ed4e175bb&amp;id=c7a7bbf212"
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true,
        },
        {
          name: 'FNAME',
          placeholder: 'Vorname',
          type: 'text',
          required: false,
        },
        {
          name: 'LNAME',
          placeholder: 'Nachname',
          type: 'text',
          required: false,
        },
      ]}
      // Change predetermined language
      messages={{
        sending: 'Sendet...',
        success: 'Danke für die Anmeldung!',
        error: 'Ein unerwarteter interner Fehler ist aufgetreten',
        empty: 'Sie müssen eine E-Mail eintragen',
        duplicate: 'Es gab zu viele Anmeldeversuche für diese E-Mailadresse',
        button: 'Anmelden',
      }}
      className="mail-form"
    />
  </section>
)
