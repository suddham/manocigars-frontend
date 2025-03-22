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
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/css/app-layout.scss';
</style>
