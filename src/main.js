import Vue from "vue";
import App from "./App.vue";
import store from './store'

import Ionic from "@ionic/vue";

Vue.config.productionTip = false;

Vue.use(Ionic)

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
