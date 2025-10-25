<script setup lang="ts">
const value = await queryCollection('pages').path('/pages/privacy-policy').first()
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
