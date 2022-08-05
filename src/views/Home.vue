<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <AboutUs />
      <!--    <Gallery />-->
      <!--    <Services />-->
      <!--    <Contacts />-->
      <!--    <Footer />-->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/sections/Header.vue';
import AboutUs from '@/components/sections/AboutUs.vue';
import Gallery from '@/components/sections/Gallery.vue';
import Services from '@/components/sections/Services.vue';
import Contacts from '@/components/sections/Contacts.vue';
import Footer from '@/components/sections/Footer.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    AboutUs
    // Gallery
    // Services,
    // Contacts,
    // Footer
  }
});
</script>

<style scoped lang="scss">
.wrapper {
  max-height: 100%;
}

.content {
  position: relative;
  z-index: 2;
}
</style>
