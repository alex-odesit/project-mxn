<template>
  <div class="wrapper-lang" @click="changeLanguage">
    <div class="box-lang" :style="background">
      <img :src="require(`@/assets/images/languages/${lingImage}.png`)" :style="positionImage" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LangSwitch',
  computed: {
    lingImage(): string {
      return this.isUk ? 'uk' : 'en';
    },
    background(): object {
      return {
        backgroundColor: this.isUk ? '#A0A0A0' : '#7D36DA'
      };
    },
    isUk(): boolean {
      return this.$i18n.locale === 'uk';
    },
    positionImage(): object {
      return {
        top: -1 + 'px',
        left: (this.isUk ? -3 : 17) + 'px'
      };
    }
  },
  methods: {
    changeLanguage(): void {
      this.$i18n.locale = this.isUk ? 'en' : 'uk';
    }
  }
});
</script>

<style scoped lang="scss">
.wrapper-lang {
  position: relative;
  cursor: pointer;
}

.box-lang {
  border-radius: 15px;
  width: 51px;
  height: 31px;
  transition: all 0.3s ease;
  img {
    transition: all 0.3s ease;
    width: 38px;
    position: absolute;
  }
}
</style>
