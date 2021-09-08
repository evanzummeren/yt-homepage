import Vue from "vue";
import App from "./App.vue";
import SimpleAnalytics from "simple-analytics-vue";

// import VueMixpanel from 'vue-mixpanel'

Vue.config.productionTip = false;

import VueSpriteAnimator from 'vue-sprite-animator'
Vue.use(VueSpriteAnimator);

Vue.use(SimpleAnalytics, { domain: "api.example.com" });


// Vue.use(VueMixpanel, {
//   token: '30a4bf31a69b5b963424f6b5965e238f',
//   config: {
//     debug: false
//   }
// })

new Vue({
  render: h => h(App)
}).$mount("#app");
