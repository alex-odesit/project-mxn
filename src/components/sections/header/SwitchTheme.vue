<template>
  <div @click="changeTheme" class="switches__theme">
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="switches__theme_lamp"
        d="M12.75 29.75H21.25"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        class="switches__theme_lamp"
        d="M17 4.25C12.3056 4.25 8.5 8.05558 8.5 12.75C8.5 14.7225 9.17186 16.538 10.2992 17.9803C11.545 19.574 12.75 21.3585 12.75 23.3813V24.0836C12.75 24.866 13.3843 25.5003 14.1667 25.5003H19.8333C20.6157 25.5003 21.25 24.866 21.25 24.0836V23.3813C21.25 21.3585 22.455 19.574 23.7008 17.9803C24.8281 16.538 25.5 14.7225 25.5 12.75C25.5 8.05558 21.6944 4.25 17 4.25Z" />
    </svg>

    <svg
      v-if="!isDarkTheme"
      class="light-blur"
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_226_244)">
        <path
          d="M13.5 6C9.35786 6 6 8.86534 6 12.3999C6 13.8851 6.59282 15.252 7.58755 16.338C8.68672 17.5379 9.75 18.8815 9.75 20.4046V20.9333C9.75 21.5224 10.3096 22 11 22H16C16.6904 22 17.25 21.5224 17.25 20.9333V20.4046C17.25 18.8815 18.3133 17.5379 19.4125 16.338C20.4072 15.252 21 13.8851 21 12.3999C21 8.86534 17.6421 6 13.5 6Z"
          fill="#FFF975" />
        <path
          d="M13.5 6C9.35786 6 6 8.86534 6 12.3999C6 13.8851 6.59282 15.252 7.58755 16.338C8.68672 17.5379 9.75 18.8815 9.75 20.4046V20.9333C9.75 21.5224 10.3096 22 11 22H16C16.6904 22 17.25 21.5224 17.25 20.9333V20.4046C17.25 18.8815 18.3133 17.5379 19.4125 16.338C20.4072 15.252 21 13.8851 21 12.3999C21 8.86534 17.6421 6 13.5 6Z"
          stroke="#FFF854"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </g>
      <defs>
        <filter
          id="filter0_f_226_244"
          x="0"
          y="0"
          width="27"
          height="28"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_226_244" />
        </filter>
      </defs>
    </svg>

    <div class="s1"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'SwitchTheme',
  methods: {
    ...mapActions({ change: 'changeTheme' }),
    changeTheme(): void {
      this.change();
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme'])
  }
});
</script>

<style scoped lang="scss">
.switches__theme {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(140, 140, 140, 0.21);
  border: 1px solid #737373;
  backdrop-filter: blur(8px);
  position: relative;
}

.light-blur {
  position: absolute;
  top: 11px;
  left: 16.5px;
}

.switches__theme_lamp {
  fill: #fff746;
  stroke: #fff746;
  transition: all 0.3s ease;
}
</style>
