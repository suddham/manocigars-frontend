<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <img src="@/assets/logo-mobile.svg" alt="Vue logo" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;

  &__logo {
    margin: 0 auto;
    max-width: 80px;
    img {
      border-radius: 50%;
    }
  }
}
</style>
