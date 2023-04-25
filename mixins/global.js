import Vue from 'vue';

Vue.mixin({
  filters: {

  },
  methods: {
    NumberFormat(value, fixed) {
      return new Intl.NumberFormat('EN-en', { maximumFractionDigits: fixed || 0 }).format(value || 0);
    },
    async GetUserData() {
      if (this.$store.getters['auth/isAuth'] && !Object.keys(this.$store.getters['account/getUserData']).length) {
        await this.$store.dispatch('account/getUserData');
      }
    },
    async ShowError(e, text) {
      let message = '';
      if (text) {
        message = text;
      } else if (e && e.response) {
        message = e.response.data.message || e.response.data.msg;
      } else {
        message = 'Default error';
      }
      await this.$store.dispatch('main/showToast', {
        title: 'Error',
        text: message,
        type: 'danger',
      });
    },
  },
});
