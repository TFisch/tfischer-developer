// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
import App from './App';
import router from './router';

Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.use(SequentialEntrance);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
