<script setup lang="ts">
const route = useRoute()
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => {
  if (route.path !== '/') {
    return []
  }

  return [{
    label: 'Grundsätze',
    to: '#principles',
    icon: 'i-heroicons-cube-transparent',
    active: activeHeadings.value.includes('principles') && !activeHeadings.value.includes('products')
  },
  {
    label: 'Produkte',
    to: '#products',
    icon: 'i-heroicons-cube-transparent',
    active: activeHeadings.value.includes('products')
  },
  {
    label: 'Kontakt',
    to: '#contact',
    icon: 'i-heroicons-cube-transparent',
    active: activeHeadings.value.includes('contact')
  }]
})

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#principles'),
    document.querySelector('#products'),
    document.querySelector('#contact')
  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <div class="flex items-center">
        <nuxt-img
          src="/logo.png"
          alt="Logo"
          class="w-12 h-12"
        />
        Privatimkerei Hoffmann
      </div>
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UColorModeButton />
    </template>
  </UHeader>
</template>
