<template>
  <div style="width: 100%; min-width: 360px; height: auto; padding-top: 10px">
    <div class="d-flex ga-5">
      <VBtn to="/">Home</VBtn>
      <VBtn to="/about">About</VBtn>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
