
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import ElementUI from "element-ui";
import router from "./router";
import store from "./store";

import Vue from "vue";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "../theme/index.css";
Vue.use(BootstrapVue);

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
