<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed<Array<NavigationMenuItem>>(() => {
  if (route.path !== '/') {
    return []
  }

  return [{
    active: activeHeadings.value.includes('principles') && !activeHeadings.value.includes('products'),
    label: 'Grundsätze',
    to: '#principles',
  }, {
    active: activeHeadings.value.includes('products'),
    label: 'Produkte',
    to: '#products',
  }, {
    active: activeHeadings.value.includes('contact'),
    label: 'Kontakt',
    to: '#contact',
  }]
})

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#principles'),
    document.querySelector('#products'),
    document.querySelector('#contact'),
  ])
})
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex items-center">
        <nuxt-img
          src="/logo.png"
          alt="Logo"
          class="w-12 h-12"
        />
        Privatimkerei Hoffmann
      </div>
    </template>

    <UNavigationMenu
      :items="items"
    />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
