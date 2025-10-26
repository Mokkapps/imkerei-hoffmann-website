<template>
  <div>
    <AppHeader />

    <UMain>
      <slot />
    </UMain>

    <USeparator
      class="h-px"
    />

    <AppFooter />
  </div>
</template>
