<template>
  <div class="app">
    <section class="app__header">
      <AppHeader />
    </section>
    <section class="app__sidebar">
      <AppSidebar />
    </section>
    <main class="app__main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/app-layout.scss';
</style>
