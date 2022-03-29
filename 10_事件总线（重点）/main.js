import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    //安装全局事件总线
    Vue.prototype.$bus = this  
  }
}).$mount('#app')

// 出现嵌套组件时,App往孙子辈组件传输数据,用事件总线更加方便,不用逐层传递
