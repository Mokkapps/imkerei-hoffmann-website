import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../layout'
import image from '../images/sat1-warencheck.png'

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
`

const RoundedImage = styled(Img)`
  border-radius: 10px;
`

const TextContainer = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 30%;
  margin: 0 1rem 0 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Section = styled.section`
  background-color: lightgray;
  padding: 1rem;
  border-radius: 10px;
`

const VideoContainer = styled.div`
  margin: 0 auto;
  width: 60%;
`

const ProductsPage = ({ data }) => (
  <Layout>
    {console.log(data)}
    <h1>Unsere Produkte</h1>
    <section>
      <p>
        Unsere Produkte können Sie{' '}
        <a href="/contact">bei uns an der Haustür erwerben.</a>
      </p>
      <p>
        Damit Sie nicht vergebens kommen,{' '}
        <a href="/contact">
          rufen Sie doch bitte vorher an oder schicken eine E-Mail und
          vereinbaren einen Termin.
        </a>
      </p>
      <p>
        Wir verkaufen nur Honig unserer eigenen Bienenvölker, daher kann es auch
        mal passieren, dass der ein oder andere Honig vergriffen ist.
      </p>
    </section>
    <h2>Produkte</h2>
    <p>
      In unserer Imkerei verwenden wir zum Kampf gegen die Varroa-Milbe
      ausschließlich biologische Säuren (Ameisensäure, Milchsäure und
      Oxalsäure). Diese Säuren sind für die Milben tödlich, werden aber von den
      Bienen, bei korrekter Handhabung, gut vertragen.
    </p>
    <p>
      <strong>
        Der Einsatz von Medikamenten findet bei uns generell nicht statt!
      </strong>
    </p>
    <Section>
      <h3>Honig</h3>
      <FlexContainer>
        <ImageContainer>
          <RoundedImage fluid={data.honey.childImageSharp.fluid} />
        </ImageContainer>
        <TextContainer>
          <h4 style={{ marginTop: '1rem' }}>Flüssig oder fest?</h4>
          <p>
            Jeder Honig ist bei der Ernte flüssig. Er setzt sich zusammen aus
            ca. 80 Prozent Frucht- und Traubenzucker, 18 Prozent Wasser und 1
            Prozent gesunder Wirkstoffe. Je nach Mischverhältnis von Frucht- und
            Traubenzucker, wird der Honig fest oder bleibt flüssig. Einen festen
            Honig bezeichnet man auch als kristallisierten Honig. Wenn der
            Traubenzuckeranteil hoch sein sollte, kristallisiert der Honig
            schneller. Ein hoher Fruchtzuckeranteil ist beispielsweise in
            Akazienhonig vorzufinden. Cremigen Honig produziert der Imker durch
            ein regelmäßiges rühren des Honig, dadurch werden die
            Zuckerkristalle klein und verteilen sich gleichmäßig. Flüssig oder
            fest sagt nichts über die Qualität des Honigs aus, sondern bleibt
            Geschmackssache.
          </p>
        </TextContainer>
      </FlexContainer>
      <FlexContainer>
        <TextContainer>
          <h4>Honiggewinnung</h4>
          <p>
            Honig entsteht in einem langen Prozess und ist seit vielen
            Jahrhunderten eine kostbare Substanz. Eine Biene fliegt mehrere
            hundert Blüten an und sammelt in ihrer Honigblase den süßen Saft. Im
            Bienenstock übergibt die Sammlerin diesen Saft den Stockbienen.
            Diese wandeln ihn in Honig um. Die Stockbiene fügt dem Saft
            körpereigene Substanzen zu, sodass der Wassergehalt reduziert wird.
            Anschließend wird der Honig in den Waben eingelagert und dient als
            Wintervorrat. Der Imker darf erst Honig entnehmen, wenn die Bienen
            mehr einlagern, als sie selbst als Nahrung benötigen. Der Imker
            schleudert den Honig aus der Wabe. Die Waben werden anschließen den
            Bienen zurückgegeben, damit Sie neuen Honig einlagern können. Jeder
            Honig ist kaltgeschleudert, so auch das „Nettegold“! Anschließend
            wird er Honig noch gesiebt, gerührt und in Gläser abgefüllt.
          </p>
          <p>
            Die Bienenhaltung wird vom Veterinäramt überwacht. Nur wenn es den
            Bienen gut geht, produzieren sie Honig. „Nettegold“ ist ein reines
            Naturprodukt ohne irgendwelche Zusätze. Auch wenn Bienen als lästig
            empfunden werden, ist jeder Mensch von ihnen abhängig. Die Imkerei
            ist eine wichtige Tätigkeit, um die Biodiversität und das
            ökologische Gleichgewicht zu erhalten.
          </p>
        </TextContainer>
        <ImageContainer>
          <RoundedImage fluid={data.honeyExtractor.childImageSharp.fluid} />
        </ImageContainer>
      </FlexContainer>
      <h4 style={{ marginTop: '1rem' }}>
        Was bedeutet „Honig aus EG- und Nicht-EG-Ländern“?
      </h4>
      <p>
        Auf nahezu jedem Super- oder Biomarkt-Honig findet man die Bezeichnung{' '}
        <strong>„Honig aus EG- und Nicht-EG-Ländern“</strong>. Der Fernsehsender
        Sat 1 hat recherchiert, was es damit auf sich hat.
      </p>
      <VideoContainer>
        <a href="http://www.sat1.de/tv/der-grosse-waren-check/video/22-honig-aus-aller-welt-clip">
          <img
            alt="Video - Waren Check - Honig aus aller Welt"
            title="Video Honig aus aller Welt"
            src={image}
          />
        </a>
      </VideoContainer>
    </Section>
    <Section style={{ marginTop: '2rem' }}>
      <h3>Bienenwachstücher</h3>
      <FlexContainer>
        <ImageContainer>
          <RoundedImage fluid={data.beeswaxCloth.childImageSharp.fluid} />
        </ImageContainer>
        <TextContainer>
          <p style={{ marginTop: '1rem' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis
            fugiat perspiciatis eum sunt fuga labore numquam, temporibus aliquam
            aliquid itaque dignissimos recusandae nemo voluptatem reiciendis
            dolorum eius repudiandae accusamus. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptates vero expedita minus, ab
            sed velit autem ipsum nemo placeat recusandae exercitationem totam
            iure quibusdam nostrum ea asperiores esse pariatur eveniet.
          </p>
        </TextContainer>
      </FlexContainer>
    </Section>
  </Layout>
)

export default ProductsPage

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    honey: file(relativePath: { eq: "honey.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    honeyExtractor: file(relativePath: { eq: "honigschleuder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beeswaxCloth: file(relativePath: { eq: "bienenwachstuch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
