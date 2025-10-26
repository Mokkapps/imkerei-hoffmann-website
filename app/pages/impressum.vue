<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const value = await queryCollection('pages').path('/pages/imprint').first()

defineOgImageComponent('NuxtSeo', {
  description: 'Impressum',
  theme: '#B29712',
  title: siteMetadata.title,
})
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <UPageHeader title="Impressum" />
        <UPageBody prose>
          <ContentRenderer :value="value" />
        </UPageBody>
      </upage>
    </UContainer>
  </UMain>
</template>
