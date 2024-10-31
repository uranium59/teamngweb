<script setup>
import { RouterView } from 'vue-router'
import FixedHeader from './components/FixedHeader.vue';
import FixedFooter from './components/FixedFooter.vue';
</script>

<template>
  <FixedHeader />
  <div class="body-wrap">
    <RouterView />
  </div>
  <FixedFooter />
</template>

<style scoped>
.body-wrap {
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
