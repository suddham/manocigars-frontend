import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useHumidorStore = defineStore('humidor', {
  state: () => ({
    humidor: useLocalStorage('humidor', [])
  }),
  getters: {
    getHumidor(state) {
      return state.humidor
    },
    getNoHumidors(state) {
      return state.humidor.length === 0
    }
  },
  actions: {
    setHumidor(newHumidor) {
      this.humidor = newHumidor
    }
	}
})


