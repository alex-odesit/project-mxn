<template>
  <section class="about-us">
    <div class="container">
      <div class="about-us__row">
        <div class="about-us__body">
          <div class="about-us__title">
            {{ $t('about_us.title') }}
          </div>
          <div class="about-us__text">
            {{ $t('about_us.text') }}
          </div>
        </div>

        <div class="card">
          <img src="@/assets/images/aboutUs/aboutUs.png" />
          <div class="card-shine"></div>
        </div>
        <!--        <div class="about-us__img">-->
        <!--          <img src="@/assets/images/aboutUs/aboutUs.png" alt="" />-->
        <!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutUs'
});
</script>

<style scoped lang="scss">
.about-us {
  background-color: $backLight;
  padding: 160px 0;
  box-shadow: 0 -10px 50px rgba(244, 244, 244, 0.7);
  transition: all 0.3s ease;
  @media (max-width: 992px) {
    padding: 140px 0;
  }
  @media (max-width: 768px) {
    padding: 100px 0;
  }
}

.about-us__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
}

.about-us__body {
  flex: 0 0 50%;
}

.about-us__img {
  flex: 0 0 50%;
  img {
    width: 100%;
  }
}

.about-us__title {
  font-family: 'Jura';
  font-weight: 700;
  font-size: 70px;
  line-height: 83px;
  margin-bottom: 11px;
  color: #313131;
  @media (max-width: 1440px) {
    font-size: 70px;
  }
  @media (max-width: 992px) {
    margin-top: 42px;
    font-size: 72px;
  }
  @media (max-width: 768px) {
    font-size: 50px;
  }
}

.about-us__text {
  font-family: 'Raleway';
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  padding-right: 5%;
  color: #313131;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
}

.card {
  background-color: gainsboro;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition-duration: 0.4s;
  transition-property: box-shadow, filter, transform;
  transition-timing-function: cubic-bezier(0, 0.73, 0.48, 1);
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  flex: 0 0 50%;
  &:hover {
    box-shadow: 0px 14px 12px 0px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1) contrast(0.95) saturate(1);
    transform: rotateX(5deg) translateZ(15px);
  }
  &:hover .card-shine {
    opacity: 0.2;
    transform: rotateZ(210deg) translateX(12%) translateY(32%);
  }
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.card-shine {
  background: linear-gradient(
    to bottom,
    rgba(235, 245, 255, 0) 0%,
    rgba(235, 245, 255, 0.85) 12px,
    rgba(235, 245, 255, 0.75) 20%,
    rgba(210, 210, 210, 0) 60%,
    rgba(10, 10, 10, 0) 85%,
    rgba(10, 10, 10, 0.8) 100%
  );
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateZ(212deg) translateX(12%) translateY(59%);
  transition-duration: 0.6s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0, 0.73, 0.48, 1);
  width: 220%;
  height: 100%;
  z-index: 1;
}
</style>
