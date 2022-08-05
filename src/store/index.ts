import Vue from 'vue';
import Vuex from 'vuex';
import otherData from '@/store/modules/otherData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDarkTheme: false
  },
  getters: {
    isDarkTheme(state) {
      return state.isDarkTheme;
    }
  },
  mutations: {
    changeTheme(state): void {
      state.isDarkTheme = !state.isDarkTheme;
      if (state.isDarkTheme) document.body.classList.add('dark');
      else document.body.classList.remove('dark');
    }
  },
  actions: {
    changeTheme({ commit }): void {
      commit('changeTheme');
    }
  },
  modules: {
    otherData
  }
});
