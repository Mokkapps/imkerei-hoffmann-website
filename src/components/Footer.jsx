import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  background-color: gainsboro;
  padding: 1em;
  margin-top: 2rem;
  height: 50px;

  display: flex;
`

const Content = styled.div`
  margin: 0 auto;
`

export default () => (
  <Footer>
    <Content>
      <a href="https://github.com/Mokkapps/website">Erstellt</a> mit viel
      &hearts; von <a href="https://www.mokkapps.de">Mokkapps</a>
    </Content>
  </Footer>
)
