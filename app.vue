<template>
  <div>
    <h1>{{ config.public.apiUrl }}</h1>

    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

console.log('config.public.apiUrl', config.public.apiUrl)
</script>

<style scoped></style>
