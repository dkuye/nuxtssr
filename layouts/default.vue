<template>
  <div style="width: 100%; min-width: 360px; height: auto">
    <VApp>
      <div class="content">
        <div class="d-flex ga-5">
          <VBtn to="/" color="primary">Home</VBtn>
          <VBtn to="/about">About</VBtn>
        </div>

        <div class="main">
          <slot />
        </div>
      </div>
    </VApp>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: #f4f4f4;
}
.main {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  height: 500px;
}
</style>
