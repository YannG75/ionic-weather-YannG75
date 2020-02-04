import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Ionic from '@ionic/vue';
import Axios from "axios";
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');