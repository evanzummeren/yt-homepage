import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueSpriteAnimator from 'vue-sprite-animator'
Vue.use(VueSpriteAnimator)

new Vue({
  render: h => h(App)
}).$mount("#app");
