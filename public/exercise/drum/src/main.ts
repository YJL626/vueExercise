import Vue from "vue";
import App from "./App.vue";
import "@/assets//css/base.scss";
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
new Vue({
  render: (h) => h(App),
}).$mount("#app");
