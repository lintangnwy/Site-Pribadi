<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer class="px-4 sm:px-8 lg:px-12 pt-10">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
