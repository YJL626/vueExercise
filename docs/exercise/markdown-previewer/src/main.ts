import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "@/assets/css/base.scss";
Vue.use(Element, { size: "small", zIndex: 3000 });

import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
