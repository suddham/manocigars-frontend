<template>
  <div class="home-view">
    <section v-for="(card, index) in numCards" :key="index">
      <AppCard />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppCard from '@/components/ui/cards/AppCard.vue'

const numCards = ref(5)
</script>

<style lang="scss" scoped>
.home-view {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
}
</style>
