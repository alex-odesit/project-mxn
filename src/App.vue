<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import M from 'materialize-css';
import { boot } from '@/boot';

export default Vue.extend({
  async beforeCreate() {
    await boot();
  },
  mounted() {
    M.AutoInit();
  }
});
</script>

<style lang="scss">
@import 'assets/styles/main';
</style>
