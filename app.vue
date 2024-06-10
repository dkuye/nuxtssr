<template>
  <!--   <div>
    <div class="pad">
      <h1>config.apiUrl</h1>
      <h2>{{ config.apiUrl }}</h2>
    </div>
  </div> -->
  <NuxtLayout>
    <!-- <v-app> -->
    <NuxtLoadingIndicator :height="6" color="repeating-linear-gradient(to right,#16994C 0%,#8AFFBB 50%,#16994C 100%)" />
    <!-- <NotificationAlert /> -->
    <NuxtPage />
    <!--  </v-app> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
console.log('config.apiUrl', config.apiUrl)
</script>

<style scoped></style>
