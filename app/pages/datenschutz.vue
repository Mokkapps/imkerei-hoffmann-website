<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const value = await queryCollection('pages').path('/pages/privacy-policy').first()

defineOgImageComponent('NuxtSeo', {
  description: 'Datenschutzerklärung',
  theme: '#B29712',
  title: siteMetadata.title,
})
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <UPageHeader title="Datenschutzerklärung" />
        <UPageBody prose>
          <ContentRenderer :value="value" />
        </UPageBody>
      </upage>
    </ucontainer>
  </umain>
</template>
