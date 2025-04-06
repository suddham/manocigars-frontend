<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <!-- logo -->
      <img src="@/assets/logo-mobile.svg" alt="Vue logo" />
      <!-- menu -->

      <!-- theme -->
      <v-icon name="hi-sun" @click="themeStore.setTheme('light')" />
      <v-icon name="hi-moon" @click="themeStore.setTheme('dark')" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  background: var(--color-foreground);

  &__logo {
    margin: 0 auto;
    max-width: 80px;
    img {
      border-radius: 50%;
    }
  }
}
</style>
