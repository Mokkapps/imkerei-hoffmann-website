<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const items = [
  {
    label: 'Flüssiger oder fester Honig?',
    slot: 'konsistenz'
  },
  {
    label: 'Wie ernte ich den Honig?',
    slot: 'honigschleuder'
  },
  {
    label: 'Was bedeutet „Honig aus EU- und Nicht-EU-Ländern“?',
    slot: 'eu-honey'
  }]

const { public: { googleMapsApiKey } } = useRuntimeConfig()

const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}
    &q=Pfarrhofstraße+7,94267+Prackenbach`

useSeoMeta({
  title: siteMetadata.title,
  ogTitle: siteMetadata.title,
  description: siteMetadata.description,
  ogDescription: siteMetadata.description
})
</script>

<template>
  <div>
    <ULandingHero
      :links="[{ label: 'Kontaktieren Sie mich', icon: 'i-heroicons-envelope', color: 'amber', size: 'xl', to: '/#contact' }]"
      orientation="horizontal"
    >
      <nuxt-img
        src="/me.jpg"
        alt="Hero"
        class="w-full rounded-md shadow-xl"
      />

      <template #title>
        <div class="flex flex-col">
          <span>Hallo!</span>
          <span>Mein Name ist Renate Hoffmann.</span>
        </div>
      </template>

      <template #description>
        <div class="flex flex-col gap-2">
          <p>
            Ich bin die Imkerin in unserer <strong>Privatimkerei Hoffmann</strong>.
          </p>
          <p>
            Die Imkertradition geht in unserer Familie bis in das <strong>Jahr 1890</strong> zurück.
          </p>
          <p>
            Was als Hobby begann, wächst nun immer mehr zu einem <strong>Familienbetrieb</strong> heran.
          </p>
          <p>
            Mit viel <strong>Liebe zur Honigbiene</strong> und großem Pflegeaufwand arbeite ich auf eine nachhaltige Weise mit und an <strong>gesunden Honigbienen</strong>, denn nur gesunde Honigbienen sind ein Garant für unsere Zukunft.
          </p>
        </div>
      </template>
    </ULandingHero>

    <ULandingSection
      title="Meine Grundsätze"
      icon="i-heroicons-star"
    >
      <UPageGrid
        id="principles"
      >
        <ULandingCard
          title="Gesunde, vitale Bienen"
          description="Ohne Medikamenteneinsatz"
          color="primary"
        >
          <nuxt-img
            src="/bees.jpg"
            class="w-full rounded-md h-[15rem]"
          />
        </ULandingCard>
        <ULandingCard
          title="Erstklassiger Honig"
          description="Hergestellt nach den strengen Qualitätskriterien"
          color="primary"
        >
          <nuxt-img
            src="/honey.jpg"
            class="w-full rounded-md h-[15rem]"
          />
        </ULandingCard>
        <ULandingCard
          title="100% regionaler Honig"
          description="Ich imkere nur im Landkreis Regen & Straubing-Bogen"
          color="primary"
        >
          <nuxt-img
            src="/regional.jpg"
            class="object-fit w-full rounded-md h-[15rem] "
          />
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      icon="i-heroicons-shopping-cart"
      title="Meine Produkte"
    >
      <template #description>
        <p id="products">
          In unserer Imkerei verwende ich zum Kampf gegen die Varroa-Milbe ausschließlich biologische Säuren (Ameisensäure, Milchsäure und Oxalsäure). Diese Säuren sind für die Milben tödlich, werden aber von den Bienen, bei korrekter Handhabung, gut vertragen.
        </p>
        <p class="font-bold">
          Der Einsatz von Medikamenten findet bei mir generell nicht statt!
        </p>
      </template>

      <ULandingCard
        orientation="horizontal"
        title="Honig"
      >
        <nuxt-img
          src="/honey.jpg"
          class="w-full rounded-md"
        />
        <template #description>
          <p>Der Honig wird flüssig aus der Bienenwabe geerntet. Er besteht aus ca. 80% Frucht- und Traubenzucker, 18% Wasser und 1% gesunder Wirkstoffe. Ob der Honig flüssig oder fest ist, entscheidet das Mischverhältnis von Frucht- und Traubenzucker. Festen Honig bezeichnet man auch als kristallisierten Honig. Honig mit hohem Traubenzuckeranteil kristallisiert schneller. Durch regelmäßiges Rühren des Honigs werden die Zuckerkristalle zerkleinert und sie verteilen sich gleichmäßig, wodurch cremiger Honig ensteht. Der cremig-gerührte Honig bleibt in dieser Konsistenz.</p>
        </template>
      </ULandingCard>
      <UAccordion
        :items="items"
        color="primary"
        size="xl"
      >
        <template #konsistenz>
          <div class="flex gap-8">
            <nuxt-img
              src="/honey.jpg"
              class="max-w-sm rounded-md"
            />
            <div>
              <p>Der Honig wird flüssig aus der Bienenwabe geerntet. Er besteht aus ca. 80% Frucht- und Traubenzucker, 18% Wasser und 1% gesunder Wirkstoffe. Ob der Honig flüssig oder fest ist, entscheidet das Mischverhältnis von Frucht- und Traubenzucker. Festen Honig bezeichnet man auch als kristallisierten Honig. Honig mit hohem Traubenzuckeranteil kristallisiert schneller. Durch regelmäßiges Rühren des Honigs werden die Zuckerkristalle zerkleinert und sie verteilen sich gleichmäßig, wodurch cremiger Honig ensteht. Der cremig-gerührte Honig bleibt in dieser Konsistenz.</p>
              <p class="font-bold mt-4">
                Letztendlich bleibt es aber Geschmackssache, ob man flüssigen oder festen Honig lieber mag. Qualitativ sind beide Honigvarianten gleich gut.
              </p>
            </div>
          </div>
        </template>
        <template #honigschleuder>
          <div class="flex gap-8">
            <nuxt-img
              src="/honigschleuder.jpg"
              class="max-w-sm rounded-md"
            />
            <div>
              <p>Honig ist seit vielen Jahrhunderten eine kostbare Substanz und die Enstehung ist ein langwieriger Prozess. Insgesamt fliegt die Biene für ein Glas Honig dreimal um die Welt. Eine Biene fliegt mehrere hundert Blüten an und sammelt in ihrer Honigblase den süßen Saft. Dieser Saft wird im Bienenstock von den Sammlerinnen an die Stockbienen übergeben. Um den Wassergehalt zu reduzieren, fügt die Stockbiene dem Saft noch körpereigene Substanzen hinzu. Danach wird der Honig im Stock in Waben eingelagert und dient dem Volk als Wintervorrat. Im Bienenstock übergibt die Sammlerin diesen Saft den Stockbienen. Diese wandeln ihn in Honig um. Die Stockbiene fügt dem Saft körpereigene Substanzen zu, sodass der Wassergehalt reduziert wird. Anschließend wird der Honig in den Waben eingelagert und dient als Wintervorrat. Der Imker darf erst Honig entnehmen, wenn die Bienen mehr einlagern, als sie selbst als Nahrung benötigen. Der Imker schleudert den Honig aus der Wabe. Die Waben werden anschließen den Bienen zurückgegeben, damit Sie neuen Honig einlagern können. Jeder Honig ist kaltgeschleudert, so auch das „Nettegold“! Anschließend wird er Honig noch gesiebt, gerührt und in Gläser abgefüllt. Zur Honiggewinnung wird der Honig aus der Wabe geschleudert. Anschließend werden die Waben dem Volk zurückgegeben, damit neuer Honig eingelagert werden kann.</p>
              <p class="font-bold mt-4">
                Mein Honig wird kalt geschleudert, gesiebt (eventuell noch cremig gerührt) und in Gläser abgefüllt.
                Es ist ein reines Naturprodukt ohne irgendwelche Zusätze.
              </p>
            </div>
          </div>
        </template>
        <template #eu-honey>
          <div class="flex gap-8">
            <NuxtLink
              to="https://youtu.be/7NEoC1ETcjc?feature=shared&t=32"
              external
              target="_blank"
            >
              <nuxt-img
                src="/sat1-warencheck.png"
                class="max-w-sm rounded-md"
              />
            </NuxtLink>
            <div>
              <p>Auf nahezu jedem Super- oder Biomarkt-Honig findet man die Bezeichnung „Honig aus EU- und Nicht-EU-Ländern“. Dieses Video klärt darüber auf, wo der Honig aus dem Supermarkt herkommt und wie er oft gepanscht wird.</p>
            </div>
          </div>
        </template>
      </UAccordion>

      <ULandingCard
        title="Bienenwachstücher"
        orientation="horizontal"
      >
        <nuxt-img
          src="/bienenwachstuch.jpg"
          class="max-w-sm rounded-md"
        />
        <template #description>
          <div class="flex flex-col gap-2">
            <p>Bienenwachstücher verwendet man wie Frischhaltefolie und sie bestehen aus Baumwolle und Bienenwachs.</p>
            <p>Mögliche Anwendungen:</p>
            <ul>
              <li class="list-disc ml-8">
                Lebensmittel wie etwa Obst, Gemüse, Käse, Brot einwickeln
              </li>
              <li class="list-disc ml-8">
                Schüsseln abdecken
              </li>
              <li class="list-disc ml-8">
                Brotzeit einpacken
              </li>
            </ul>
            <p>Die Tücher sind nicht geeignet für für rohes Fleisch oder Fisch.</p>
            <p>Man kann die Tücher wiederverwenden und sie halten bis zu einem Jahr.</p>
            <p>Zum Reinigen reicht es das Tuch feucht abzuwischen oder unter unter fliessendem (kalten bis handwarmen) Wasser abzuspülen.</p>
          </div>
        </template>
      </ULandingCard>
    </ULandingSection>

    <ULandingSection
      title="Kontakt"
      icon="i-heroicons-envelope"
    >
      <template #description>
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <p id="contact">
              Ich freue mich über Ihre Anfrage!
            </p>
          </div>
          <ULandingGrid>
            <ULandingCard title="Kontaktdaten" class="col-span-6 row-span-2">
              <template #description>
                <div class="flex flex-col">
                  <span>Renate Hoffmann</span>
                  <span>Pfarrhofstraße 7</span>
                  <span>94267 Prackenbach</span>
                  <span>Telefon: <NuxtLink
                    to="tel:09944/2283"
                    class="text-primary underline"
                  >09944/2283</NuxtLink></span>
                  <span>Email: <NuxtLink
                    to="mailto:kontakt@privatimkerei-hoffmann.de"
                    class="text-primary underline"
                  >kontakt@privatimkerei-hoffmann.de</NuxtLink></span>
                </div>
              </template>
            </ULandingCard>
            <ULandingCard title="Standort" class="col-span-6 row-span-2">
              <template #description>
                <iframe
                  width="600"
                  height="450"
                  style="border:0"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                  :src="googleMapsUrl"
                />
              </template>
            </ULandingCard>
          </ULandingGrid>
        </div>
      </template>
    </ULandingSection>
  </div>
</template>
