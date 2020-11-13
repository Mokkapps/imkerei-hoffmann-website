import React from 'react'

export default () => (
  <footer className="bg-primary p-8 mt-4 h-24 flex flex-col">
    <div className="m-auto">
      <a href="https://github.com/Mokkapps/imkerei-hoffmann-website">
        Erstellt
      </a>{' '}
      mit viel &hearts; von <a href="https://www.mokkapps.de">Mokkapps</a>
    </div>
    <div className="m-auto mt-2">
      <a href="/impressum">Impressum</a> |{' '}
      <a href="/datenschutz">Datenschutzerklärung</a>
    </div>
  </footer>
)
