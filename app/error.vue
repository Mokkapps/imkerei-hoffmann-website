<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div>
    <AppHeader />

    <UContainer>
      <UMain>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UMain>
    </UContainer>

    <USeparator
      icon="i-simple-icons-nuxtdotjs"
      type="dashed"
      class="h-px"
    />

    <AppFooter />
  </div>
</template>
