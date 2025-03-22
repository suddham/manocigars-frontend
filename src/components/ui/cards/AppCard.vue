<template>
  <div class="app-card">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-card {
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  background-color: #c3c3c3;
  padding: 1.5rem;
  min-height: 200px;
}
</style>
