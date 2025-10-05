<template>
  <div class="app">
    <section class="app__sidebar">
      <AppSidebar />
    </section>
    <section class="app__header">
      <AppHeader />
    </section>
    <main class="app__main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

onMounted(async () => {
  document.title = 'Vue3 + Vite + TailwindCSS + SCSS + Vue Router + Pinia';

  // await fetch('http://localhost:4000/api/test')
  //   .then((r) => r.json())
  //   .then((data) => console.log(data));

  // await fetch('http://localhost:4000/api/messages', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   credentials: 'include', // if you use cookies
  //   body: JSON.stringify({ content: 'Hello from frontend' }),
  // }).then((r) => r.json());

  // fetch('http://localhost:4000/api/test', {
  //   credentials: 'include',
  //   // headers: { 'Authorization': 'Bearer ...' } // if you use auth headers
  // })
  //   .then((r) => r.json())
  //   .then(console.log);
});
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 'sidebar main';
  //'sidebar main';

  &__sidebar {
    // grid-column: 1 / 2;
    // grid-row: 1 / 3;
    grid-area: sidebar;
    background-color: var(--color-foreground);
  }

  &__header {
    grid-area: main;
    background-color: var(--color-foreground);
    border-bottom: 1px solid var(--color-border);
  }

  &__main {
    // grid-column: 2 / 3;
    // grid-row: 2/3;
    grid-area: main;
    background-color: var(--color-background);
    padding: 2rem;
  }
}
</style>
