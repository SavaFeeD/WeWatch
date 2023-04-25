export default {
  // async registration({ commit, dispatch }, payload) {
  //   await this.$axios.$post('/v1/user/sign-up', payload);
  // },
  // async login({ dispatch }, payload) {
  //   const response = await this.$axios.$post('/v1/auth/sign-in', payload);
  //   dispatch('setNewTokens', response.result);
  // },
  // logOut({ commit }) {
  //   this.$cookies.remove('access');
  //   this.$cookies.remove('refresh');
  //   commit('logOut');
  // },
  // setNewTokens({ commit }, { access, refresh }) {
  //   this.$cookies.set('access', access);
  //   this.$cookies.set('refresh', refresh);
  //   commit('setNewTokens', { access, refresh });
  // },
  // async refreshToken({ dispatch }) {
  //   const res = await this.$axios.$post('/v1/auth/refresh-token');
  //   dispatch('setNewTokens', { access: res.access, refresh: res.refresh });
  // },
};
