<template>
  <div class="md-layout-item md-size-80">
    <div class="md-layout md-alignment-center">
      <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <div class="md-layout md-alignment-center">
      <h1>vuejs members</h1>
    </div>
    <md-divider></md-divider>

    <transition>
  <router-view></router-view>
</transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all .5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
