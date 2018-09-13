import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Aside from '../components/Aside'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
`

const Main = styled.main`
  background-color: whitesmoke;
  padding: 2rem;
  flex: 1 1 auto;

  @media (min-width: 768px) {
    flex: 1 1 auto;
    overflow: auto;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Aside image={data.file} />
      <Main>
        <section>
          <h1>Herzlich Willkommen bei der Imkerei Hoffmann</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam aliquid harum nobis magni modi perspiciatis eius ullam placeat,
            quo consectetur recusandae aperiam cum laudantium at est
            reprehenderit exercitationem ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam aliquid harum nobis magni modi perspiciatis eius ullam placeat,
            quo consectetur recusandae aperiam cum laudantium at est
            reprehenderit exercitationem ea.
          </p>
        </section>
        <hr />
        <section>
          <h2>Unsere Leistungen</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam aliquid harum nobis magni modi perspiciatis eius ullam placeat,
            quo consectetur recusandae aperiam cum laudantium at est
            reprehenderit exercitationem ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam aliquid harum nobis magni modi perspiciatis eius ullam placeat,
            quo consectetur recusandae aperiam cum laudantium at est
            reprehenderit exercitationem ea.
          </p>
        </section>
        <hr />
        <section>
          <h2>Impressionen</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam aliquid harum nobis magni modi perspiciatis eius ullam placeat,
            quo consectetur recusandae aperiam cum laudantium at est
            reprehenderit exercitationem ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam aliquid harum nobis magni modi perspiciatis eius ullam placeat,
            quo consectetur recusandae aperiam cum laudantium at est
            reprehenderit exercitationem ea.
          </p>
        </section>
        <hr />
        <section>
          <h2>Kontakt</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam aliquid harum nobis magni modi perspiciatis eius ullam placeat,
            quo consectetur recusandae aperiam cum laudantium at est
            reprehenderit exercitationem ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quam aliquid harum nobis magni modi perspiciatis eius ullam placeat,
            quo consectetur recusandae aperiam cum laudantium at est
            reprehenderit exercitationem ea.
          </p>
        </section>
      </Main>
    </Container>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
