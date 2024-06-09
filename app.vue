<template>
  <div>
    <h1>{{ config.apiUrl }}</h1>

    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

console.log('config.apiUrl', config.apiUrl)
</script>

<style scoped>
h1 {
  color: rgb(4, 100, 209);
  font-size: 2rem;
}
</style>
