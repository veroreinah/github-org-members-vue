<template>
  <div id="app" class="md-layout md-alignment-center">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: #41b883,
    accent: #34495e
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
