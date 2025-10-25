<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const items = [
  {
    label: 'Flüssiger oder fester Honig?',
    slot: 'konsistenz',
  },
  {
    label: 'Wie ernte ich den Honig?',
    slot: 'honigschleuder',
  },
  {
    label: 'Was bedeutet „Honig aus EU- und Nicht-EU-Ländern“?',
    slot: 'eu-honey',
  },
]

const ctaLinks = ref([
  {
    label: 'Kontaktieren Sie mich',
    target: '_blank',
    to: 'mailto:kontakt@privatimkerei-hoffmann.de',
  },
])

const { public: { googleMapsApiKey } } = useRuntimeConfig()

const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}
    &q=Pfarrhofstraße+7,94267+Prackenbach`

useSeoMeta({
  description: siteMetadata.description,
  ogDescription: siteMetadata.description,
  ogTitle: siteMetadata.title,
  title: siteMetadata.title,
})
</script>

<template>
  <div>
    <UPageHero
      :links="[{ label: 'Kontaktieren Sie mich', icon: 'i-heroicons-envelope', size: 'xl', to: '/#contact' }]"
      orientation="horizontal"
    >
      <template #top>
        <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80" />

        <LazyStarsBg />
      </template>

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
    </UPageHero>

    <UPageSection
      title="Meine Grundsätze"
      icon="i-heroicons-star"
    >
      <UPageGrid
        id="principles"
      >
        <UPageCard
          title="Gesunde, vitale Bienen"
          description="Ohne Medikamenteneinsatz"
          color="primary"
          spotlight
          spotlight-color="primary"
        >
          <nuxt-img
            src="/bees.jpg"
            class="w-full rounded-md h-60"
          />
        </UPageCard>
        <UPageCard
          title="Erstklassiger Honig"
          description="Hergestellt nach den strengen Qualitätskriterien"
          color="primary"
          spotlight
          spotlight-color="primary"
        >
          <nuxt-img
            src="/honey.jpg"
            class="w-full rounded-md h-60"
          />
        </UPageCard>
        <UPageCard
          title="100% regionaler Honig"
          description="Ich imkere nur im Landkreis Regen & Straubing-Bogen"
          color="primary"
          spotlight
          spotlight-color="primary"
        >
          <nuxt-img
            src="/regional.jpg"
            class="object-fit w-full rounded-md h-60 "
          />
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
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

      <UPageCard
        orientation="horizontal"
        title="Honig"
        spotlight
        spotlight-color="primary"
      >
        <nuxt-img
          src="/honey.jpg"
          class="w-full rounded-md"
        />
        <template #description>
          <p>Der Honig wird flüssig aus der Bienenwabe geerntet. Er besteht aus ca. 80% Frucht- und Traubenzucker, 18% Wasser und 1% gesunder Wirkstoffe. Ob der Honig flüssig oder fest ist, entscheidet das Mischverhältnis von Frucht- und Traubenzucker. Festen Honig bezeichnet man auch als kristallisierten Honig. Honig mit hohem Traubenzuckeranteil kristallisiert schneller. Durch regelmäßiges Rühren des Honigs werden die Zuckerkristalle zerkleinert und sie verteilen sich gleichmäßig, wodurch cremiger Honig ensteht. Der cremig-gerührte Honig bleibt in dieser Konsistenz.</p>
        </template>
      </UPageCard>
      <UAccordion
        :items="items"
        color="primary"
        :unmount-on-hide="false"
        :ui="{ trigger: 'text-base', body: 'text-base text-muted' }"
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

      <UPageCard
        title="Bienenwachstücher"
        orientation="horizontal"
        spotlight
        spotlight-color="primary"
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
      </UPageCard>
    </UPageSection>

    <UPageCTA
      id="contact"
      title="Kontakt"
      variant="soft"
      description="Ich freue mich über Ihre Anfrage!"
      :links="ctaLinks"
      orientation="horizontal"
    >
      <UPageCard
        title="Standort"
      >
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
      </UPageCard>

      <template #description>
        <div class="flex flex-col gap-2">
          <span class="text-xl">Ich freue mich auf Ihre Anfrage!</span>
          <div class="flex flex-col text-sm">
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
        </div>
      </template>

      <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      <StarsBg />
    </UPageCTA>
  </div>
</template>
