import Vue from 'vue'
import App from './App.vue'

//引入Vuex的store对象
import store from './store'

//引入路由插件并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入路由对象
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')


