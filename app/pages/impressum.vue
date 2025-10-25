<script setup lang="ts">
const value = await queryCollection('pages').path('/pages/imprint').first()
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
