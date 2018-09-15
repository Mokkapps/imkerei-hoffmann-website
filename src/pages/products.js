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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
        Wir verkaufen nur Honig von unseren eigenen Bienenvölker, daher kann es
        auch mal passieren, dass der ein oder andere Honig vergriffen ist.
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
            Der Honig wird flüssig aus der Bienenwabe geerntet. Er besteht aus
            ca. 80% Frucht- und Traubenzucker, 18% Wasser und 1% gesunder
            Wirkstoffe. Ob der Honig flüssig oder fest ist, entscheidet das
            Mischverhältnis von Frucht- und Traubenzucker. Festen Honig
            bezeichnet man auch als kristallisierten Honig. Honig mit hohem
            Traubenzuckeranteil kristallisiert schneller. Durch regelmäßiges
            Rühren des Honigs werden die Zuckerkristalle zerkleinert und sie
            verteilen sich gleichmäßig, wodurch cremiger Honig ensteht. Der
            cremig-gerührte Honig bleibt in dieser Konsistenz.
          </p>
          <p>
            <strong>
              Letztendlich bleibt es aber Geschmackssache, ob man flüssigen oder
              festen Honig lieber mag. Qualitativ sind beide Honigvarianten
              gleich gut.
            </strong>
          </p>
        </TextContainer>
      </FlexContainer>
      <FlexContainer>
        <TextContainer>
          <h4>Honiggewinnung</h4>
          <p>
            Honig ist seit vielen Jahrhunderten eine kostbare Substanz und die
            Enstehung ist ein langwieriger Prozess. Insgesamt fliegt die Biene
            für ein Glas Honig dreimal um die Welt. Eine Biene fliegt mehrere
            hundert Blüten an und sammelt in ihrer Honigblase den süßen Saft.
            Dieser Saft wird im Bienenstock von den Sammlerinnen an die
            Stockbienen übergeben. Um den Wassergehalt zu reduzieren, fügt die
            Stockbiene dem Saft noch körpereigene Substanzen hinzu. Danach wird
            der Honig im Stock in Waben eingelagert und dient dem Volk als
            Wintervorrat. Im Bienenstock übergibt die Sammlerin diesen Saft den
            Stockbienen. Diese wandeln ihn in Honig um. Die Stockbiene fügt dem
            Saft körpereigene Substanzen zu, sodass der Wassergehalt reduziert
            wird. Anschließend wird der Honig in den Waben eingelagert und dient
            als Wintervorrat. Der Imker darf erst Honig entnehmen, wenn die
            Bienen mehr einlagern, als sie selbst als Nahrung benötigen. Der
            Imker schleudert den Honig aus der Wabe. Die Waben werden
            anschließen den Bienen zurückgegeben, damit Sie neuen Honig
            einlagern können. Jeder Honig ist kaltgeschleudert, so auch das
            „Nettegold“! Anschließend wird er Honig noch gesiebt, gerührt und in
            Gläser abgefüllt.
          </p>
          <p>
            Zur Honiggewinnung wird der Honig aus der Wabe geschleudert.
            Anschließend werden die Waben dem Volk zurückgegeben, damit neuer
            Honig eingelagert werden kann.
          </p>
          <p>
            <strong>
              Unser Honig wird kalt geschleudert, gesiebt (eventuell noch cremig
              gerührt) und in Gläser abgefüllt.
            </strong>
          </p>
          <p>
            <strong>
              Unser Honig ist ein reines Naturprodukt ohne irgendwelche Zusätze.
            </strong>
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
            Bienenwachstücher verwendet man wie Frischhaltefolie und sie
            bestehen aus Baumwolle und Bienenwachs.
          </p>
          <p>Mögliche Anwendungen:</p>
          <ul>
            <li>Lebensmittel wie etwa Obst, Gemüse, Käse, Brot einwickeln</li>
            <li>Schüsseln abdecken</li>
            <li>Brotzeit einpacken</li>
          </ul>
          <p>
            Die Tücher sind nicht geeignet für für rohes Fleisch oder Fisch.
          </p>
          <p>
            Man kann die Tücher wiederverwenden und sie halten bis zu einem
            Jahr.
          </p>
          <p>
            Zum Reinigen reicht es das Tuch feucht abzuwischen oder unter unter
            fliessendem (kalten bis handwarmen) Wasser abzuspülen.
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
