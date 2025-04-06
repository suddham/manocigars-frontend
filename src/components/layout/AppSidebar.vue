<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <!-- logo -->
      <img src="@/assets/logo-mobile.svg" alt="Vue logo" />
      <!-- menu -->
    </div>
    <div class="sidebar__menu">
      <v-icon name="hi-home" @click="router.push('/')" :class="{ active: route.path === '/' }" />
      <v-icon
        name="hi-user"
        @click="router.push('/profile')"
        :class="{ active: route.path === '/profile' }"
      />
      <v-icon
        name="hi-cog"
        @click="router.push('/settings')"
        :class="{ active: route.path === '/settings' }"
      />
    </div>
    <!-- theme -->
    <div class="sidebar__theme">
      <v-icon
        name="hi-sun"
        class="sun"
        @click="themeStore.setTheme('light')"
        :class="{ active: themeStore.getTheme === 'light' }"
      />
      <v-icon
        name="hi-moon"
        class="moon"
        @click="themeStore.setTheme('dark')"
        :class="{ active: themeStore.getTheme === 'dark' }"
      />
      <span class="animated-bg"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
const router = useRouter();
const route = useRoute();
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
  &__theme {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    svg {
      cursor: pointer;
      position: absolute;
      filter: drop-shadow(0 0 2px var(--color-background-muted));
      transition: 500ms ease;

      &.sun {
        &.active {
          transform: rotate(-360deg) scale(0);
        }
      }

      &.moon {
        &.active {
          transform: rotate(360deg) scale(0);
        }
      }

      &.active {
        //transform: rotate(360deg) scale(0);
      }
    }

    .animated-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--color-background);
      border-radius: 50%;
      filter: blur(10px);
      z-index: -1;
      transition: all 0.5s ease;
    }
  }
}
</style>
