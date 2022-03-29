import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vueResource from 'vue-resource'
Vue.use(vueResource)

new Vue({
  render: h => h(App),
  beforeCreate(){
    //安装全局事件总线
    Vue.prototype.$bus = this  
  }
}).$mount('#app')


