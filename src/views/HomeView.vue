<template>
  <div class="home-view">
    <!-- <section v-for="(card, index) in numCards" :key="index">
      <AppCard />
    </section> -->

    <!-- If no humidor found -->
    <section v-if="humidorStore.getNoHumidors">
      <!-- <ManuallyAdd
        button="Manually add a cigar"
        title="Manually add a cigar"
        description="Manually fill in the details to add a cigar to your humidor."
      >
        <template v-slot:trigger>
          <DialogTrigger>
            <AppCard> No Humidors found. Click to add a humidor</AppCard>
          </DialogTrigger>
        </template>
      </ManuallyAdd> -->
      No humidors found. Click to add a humidor
    </section>

    <section v-else>
      <!-- Show Humidors added -->
      <AppCard> Humidors found. </AppCard>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useHumidorStore } from '@/stores/humidor'
const numCards = ref(5)
const humidorStore = useHumidorStore()

console.log('🚀 ~ :31 ~ humidorStore:', humidorStore)
</script>

<style lang="scss" scoped>
.home-view {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
}
</style>
