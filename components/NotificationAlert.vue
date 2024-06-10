<template>
  <notifications position="top center" :duration="7000" :max="1" :reverse="true">
    <template #body="props">
      <div
        class="my-notification"
        :class="{
          success: props.item.type === 'success',
          error: props.item.type === 'error',
          info: props.item.type === 'info',
          warning: props.item.type === 'warning'
        }"
      >
        <div class="notification-title">
          <span>{{ props.item.title }}</span>
          <v-btn icon elevation="0" variant="text" size="small" @click="props.close">
            <v-icon icon="fluent:dismiss-16-filled"></v-icon>
          </v-btn>
        </div>

        <div class="notification-content" v-html="props.item.text" />
      </div>
    </template>
  </notifications>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.my-notification {
  color: #fff;
  padding: 10px 10px 10px 20px;
  border-radius: 5px;
  //width: 300px;
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  margin: 10px;

  // style for title line
  .notification-title {
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  // style for content
  .notification-content {
    font-size: 1rem;
  }

  // additional styling hook when using`type` parameter, i.e. this.$notify({ type: 'success', message: 'Yay!' })
  &.success {
    /*...*/
    background-color: #31d0aa;
  }
  &.info {
    /*...*/
    background-color: #3da3d1;
  }
  &.error {
    /*...*/
    background-color: #d1475b;
  }
  &.warning {
    /*...*/
    background-color: #d17f1d;
  }
}
</style>
