<template>
  <div class="feedback">
    <div class="feedback__wrapper" @click="toogleMenu">
      <div class="feedback__wrapper_bg">
        <svg width="150" height="62" viewBox="0 0 150 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            class="feedback__wrapper_bg-img"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M140 0C145.523 0 150 4.47715 150 9.99999V40.1277C150 45.6505 145.523 50.1277 140 50.1277H73.0263H22.4317C21.1602 52.3161 19.1997 55.3395 17.467 58.0114C16.4849 59.5258 15.5761 60.9273 14.9073 62L7.00891 49.6726C2.9472 48.4011 0 44.6086 0 40.1277V10C0 4.47715 4.47716 0 10 0H140Z" />
        </svg>
      </div>
      <div class="feedback__wrapper_body">
        <svg width="152" height="64" viewBox="0 0 152 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            class="feedback__wrapper_body-image"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 1C5.47715 1 1 5.47715 1 11V41.1277C1 46.6505 5.47716 51.1277 11 51.1277H77.9737H128.568C129.84 53.3161 131.8 56.3395 133.533 59.0114C134.515 60.5258 135.424 61.9273 136.093 63L143.991 50.6727C148.053 49.4012 151 45.6086 151 41.1277V11C151 5.47715 146.523 1 141 1H11Z" />
          <path
            d="M128.568 51.1277L129.001 50.8765L128.856 50.6277H128.568V51.1277ZM133.533 59.0114L133.113 59.2835L133.533 59.0114ZM136.093 63L135.668 63.2645L136.087 63.9358L136.514 63.2697L136.093 63ZM143.991 50.6727L143.842 50.1955L143.668 50.2498L143.57 50.4029L143.991 50.6727ZM1.5 11C1.5 5.75329 5.7533 1.5 11 1.5V0.5C5.20101 0.5 0.5 5.201 0.5 11H1.5ZM1.5 41.1277V11H0.5V41.1277H1.5ZM11 50.6277C5.7533 50.6277 1.5 46.3744 1.5 41.1277H0.5C0.5 46.9266 5.20102 51.6277 11 51.6277V50.6277ZM77.9737 50.6277H11V51.6277H77.9737V50.6277ZM128.568 50.6277H77.9737V51.6277H128.568V50.6277ZM133.952 58.7394C132.217 56.0634 130.264 53.0519 129.001 50.8765L128.136 51.3788C129.415 53.5804 131.383 56.6155 133.113 59.2835L133.952 58.7394ZM136.517 62.7355C135.845 61.6581 134.934 60.2523 133.952 58.7394L133.113 59.2835C134.096 60.7993 135.002 62.1965 135.668 63.2645L136.517 62.7355ZM143.57 50.4029L135.672 62.7303L136.514 63.2697L144.412 50.9424L143.57 50.4029ZM150.5 41.1277C150.5 45.3838 147.701 48.9875 143.842 50.1955L144.14 51.1498C148.405 49.8149 151.5 45.8334 151.5 41.1277H150.5ZM150.5 11V41.1277H151.5V11H150.5ZM141 1.5C146.247 1.5 150.5 5.7533 150.5 11H151.5C151.5 5.20101 146.799 0.5 141 0.5V1.5ZM11 1.5H141V0.5H11V1.5Z"
            fill="white" />
        </svg>
        <div class="feedback__wrapper_text">Feedback</div>
      </div>
    </div>
    <div :style="visible" :class="openMenu" class="form-wrapper">
      <form method="post">
        <div class="form-box">
          <div class="form__title">
            {{ $t('feed_back.questions') }}
          </div>
          <div class="form__input">
            <input :placeholder="$t('feed_back.name')" type="text" class="form__input_name" />
          </div>
          <div class="form__input">
            <input :placeholder="$t('feed_back.email')" type="email" class="form__input_email" />
          </div>
          <div class="form__input">
            <textarea :placeholder="$t('feed_back.message')"></textarea>
          </div>
          <button class="form__btn" type="submit">{{ $t('feed_back.send') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { set } from 'vue';

export default Vue.extend({
  name: 'FeedBack',
  data: () => ({
    isOpenMenu: false,
    started: true,
    allowedChangeStatus: true
  }),
  mounted() {
    setTimeout(() => {
      this.started = false;
    }, 700);
  },
  methods: {
    toogleMenu(): void {
      if (!this.allowedChangeStatus) return;
      this.allowedChangeStatus = false;
      setTimeout(() => (this.allowedChangeStatus = true), 700);
      this.isOpenMenu = !this.isOpenMenu;
    }
  },
  computed: {
    openMenu(): string {
      return this.isOpenMenu ? 'openMenu' : 'closeMenu';
    },
    visible(): object {
      return { visibility: this.started ? 'hidden' : 'visible' };
    }
  }
});
</script>

<style scoped lang="scss">
.feedback {
  position: absolute;
  bottom: 51px;
  right: 0;
  width: 176px;
  height: 79px;
}

.feedback__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  &:hover {
    .feedback__wrapper_bg-img {
      fill: $purple;
    }
    .feedback__wrapper_body-image {
      fill: $grey;
    }
  }
}

.feedback__wrapper_bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.feedback__wrapper_body {
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
}

.feedback__wrapper_text {
  position: absolute;
  z-index: 3;
  line-height: 24px;
  font-family: 'DrukWideBold';
  font-weight: 700;
  font-size: 18px;
  right: 11px;
  bottom: 26px;
}

.feedback__wrapper_bg-img {
  fill: $grey;
  transition: all 0.3s ease;
}

.feedback__wrapper_body-image {
  transition: all 0.3s ease;
  fill: $purple;
}

.form-wrapper {
  background-color: $greyWhite;
  position: fixed;
  bottom: 51px;
  right: 20px;
  z-index: 10;
  overflow: hidden;
  border-radius: 14px;
  transition: all 0.3s ease;
  font-family: 'Raleway';
}

.openMenu {
  animation: openMenu 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

.closeMenu {
  animation: closeMenu 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

.form__title {
  color: $grey;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  max-width: 187px;
  margin-bottom: 20px;
}

.form__input {
  margin-bottom: 18px;
  input,
  textarea {
    width: 100%;
    padding: 0px 0px 0px 10px;
    margin: 0;
    background-color: $inputLight;
    color: $grey;
    font-weight: 400;
    font-size: 14px;
    line-height: 173.6%;
    border: none !important;
    box-sizing: border-box;
    &:focus {
      box-shadow: none !important;
    }
  }
  input {
    height: 44px;
  }
}

textarea {
  resize: none;
  height: 94px;
  padding: 10px 10px 0 10px !important;
}

.form__input_name {
}

.form__input_email {
}

.form__btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 173.6%;
  color: #d9d9d9;
  padding: 8px 82px;
  background-color: $purple;
  width: 100%;
  border-radius: 3px;
  border: 1px solid $purple;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid #ffffff;
    background-color: $grey;
  }
}

@keyframes openMenu {
  0% {
    width: 0px;
    height: 5px;
    padding: 0;
  }
  50% {
    width: 291px;
    height: 5px;
    padding: 0 20px;
  }
  100% {
    height: 406px;
    width: 291px;
    padding: 24px 20px;
  }
}

@keyframes closeMenu {
  0% {
    width: 291px;
    height: 406px;
    padding: 24px 20px;
  }
  50% {
    width: 291px;
    height: 5px;
    padding: 0 20px;
  }
  100% {
    height: 5px;
    width: 0px;
    padding: 0;
  }
}
</style>
