<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <header>
    <Header>Frontend Coding Test</Header>
  </header>

  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
  .content {
    padding: 2rem;
  }
</style>
