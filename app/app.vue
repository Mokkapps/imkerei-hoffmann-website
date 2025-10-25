<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'de',
  },
  link: [
    { href: '/favicon.ico', rel: 'icon' },
  ],
  meta: [
    { content: 'width=device-width, initial-scale=1', name: 'viewport' },
  ],
})

useSeoMeta({
  ogImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://landing-template.nuxt.dev/social-card.png',
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
