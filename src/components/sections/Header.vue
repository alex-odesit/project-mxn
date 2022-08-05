<template>
  <header class="header">
    <div class="header-box">
      <div class="container">
        <div class="nav">
          <div class="logo">
            <img src="~@/assets/images/logo.png" alt="logo" />
          </div>
          <ul class="menu">
            <li class="menu__item">{{ $t('menu.about_us') }}</li>
            <li class="menu__item">{{ $t('menu.gallery') }}</li>
            <li class="menu__item">{{ $t('menu.services') }}</li>
          </ul>
          <div class="switches">
            <LangSwitch />
            <SwitchTheme />
          </div>
          <Burger class="burger" />
        </div>
        <div class="row">
          <div class="col s12">
            <div class="title">YOUR Family MXN</div>
          </div>
        </div>
        <FeedBack></FeedBack>
      </div>
    </div>
    <video
      class="video"
      poster="~@/assets/images/bg.jpg"
      loop
      preload="auto"
      autoplay
      muted
      src="~@/assets/video/header.mp4"></video>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import FeedBack from '@/components/sections/header/FeedBack.vue';
import LangSwitch from '@/components/sections/header/LangSwitch.vue';
import SwitchTheme from '@/components/sections/header/SwitchTheme.vue';
import Burger from '@/components/sections/header/Burger.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    FeedBack,
    LangSwitch,
    SwitchTheme,
    Burger
  }
});
</script>

<style scoped lang="scss">
.header {
  height: 100vh;
}

.header-box {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgb(0, 0, 0);
  background: radial-gradient(circle, rgba(0, 0, 0, 0.18280815744266454) 0%, rgba(0, 0, 0, 0.8634804263502276) 100%);
  padding-top: 40px;
}

.video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.container {
  position: relative;
  height: 100%;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
}

.menu {
  width: 371px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    display: none;
  }
}

.menu__item {
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  transition: all 0.3s ease;
  font-family: 'Raleway';
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: $purple;
  }
}

.switches {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 166px;
  @media (max-width: 992px) {
    display: none;
  }
}

.burger {
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
}

.title {
  font-family: 'DrukWideBold';
  text-align: center;
  font-weight: 700;
  font-size: 94px;
  line-height: 123px;
  max-width: 600px;
  margin: 50px auto 0 auto;
}
</style>
