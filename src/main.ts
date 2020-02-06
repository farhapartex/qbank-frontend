import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { ACCESS_TOKEN } from './store/getters.names'
import { RETRIEVE_AUTH_FROM_STORE } from './store/actions.names'

Vue.config.productionTip = false;


// store.dispatch(RETRIEVE_AUTH_FROM_STORE).then(() => { });

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (store.getters[ACCESS_TOKEN] != null) {
      next();
    } else {
      next("/auth");
    }
  } else if (to.meta.visitorRequired) {
    if (store.getters[ACCESS_TOKEN] != null) {
      next();
    }
    else {
      next();
    }
  }
  else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
