<script setup lang="ts">
const links = [{
  label: 'Impressum',
  to: '/impressum'
}, {
  label: 'Datenschutz',
  to: '/datenschutz'
}]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      <span class="text-sm text-gray-500 dark:text-gray-400">
        <p>
          Copyright © {{ new Date().getFullYear() }} Privatimkerei Hoffmann.
        </p>
        <p>
          Seite erstellt von
          <NuxtLink
            to="https://mokkapps.de"
            external
            target="_blank"
            class="text-primary underline"
          >Michael Hoffmann</NuxtLink>.
        </p>
      </span>
    </template>

    <template #right>
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>
