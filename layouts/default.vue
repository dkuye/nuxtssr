<template>
  <div style="width: 100%; min-width: 360px; height: auto; padding-top: 110px">
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
