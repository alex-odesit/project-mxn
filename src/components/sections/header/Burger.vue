<template>
  <div class="burger">
    <div class="burger__wrapper">
      <div class="burger__item"></div>
      <div class="burger__item"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Burger'
});
</script>

<style lang="scss" scoped>
.burger {
}
.burger__wrapper {
  width: 53px;
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}
.burger__item {
  background: #d9d9d9;
  border-radius: 7px;
  width: 100%;
  height: 4px;
}
</style>
