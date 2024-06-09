<template>
  <div>
    <div class="pad">
      <h1>config.apiUrl</h1>
      <h2>{{ config.apiUrl }}</h2>
    </div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
console.log('config.apiUrl', config.apiUrl)
</script>

<style scoped>
.pad {
  padding: 40px;
  text-align: center;
}
h1 {
  color: rgb(4, 100, 209);
  font-size: 2rem;
}
h2 {
  color: rgb(4, 100, 209);
  font-size: 1.2rem;
}
</style>
