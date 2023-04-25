export default function axios({
  $axios, store, app,
}) {
  // $axios.onRequest((config) => {
  //   if (store.getters['auth/isAuth']) {
  //     const urlName = config.url.split('/').pop();
  //     const token = urlName === 'refresh-token' ? store.getters['auth/refreshToken'] : store.getters['auth/accessToken'];
  //     config.headers.authorization = `Bearer ${token}`;
  //   }
  // });
  //
  // $axios.onError(async (error) => {
  //   if (error.response) {
  //     const originalRequest = error.config;
  //
  //     if (app.$cookies.get('refresh')) {
  //       if ((error.response.status === 401 && originalRequest.url === '/v1/auth/refresh-token')) {
  //         throw error;
  //       }
  //
  //       if (error.response.status === 401) {
  //         try {
  //           await store.dispatch('auth/refreshToken');
  //           return $axios(originalRequest);
  //         } catch (e) {
  //           store.dispatch('auth/logOut');
  //           app.router.push('/');
  //         }
  //       }
  //     }
  //   }
  //   throw error;
  // });
  //
  // const access = app.$cookies.get('access');
  // const refresh = app.$cookies.get('refresh');
  //
  // if (access && refresh) {
  //   store.commit('auth/setOldTokens', { access, refresh });
  // }
}
