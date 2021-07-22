import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
import AOS from "aos";

import "aos/dist/aos.css";


new Vue({
  render: h => h(App),
  created () {
    AOS.init()
  },
}).$mount('#app')
