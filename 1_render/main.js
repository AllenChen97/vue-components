import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 因vue怕我们用的是vue.runtime.xxx.js而非完整版vue.js，简易版本不含解析器，直接写template:`xxx`会报错
// 所以通用render函数接收createElement函数 去把指定组件渲染


new Vue({
  // 原render函数普通写法
  // render(createElement){ 
  //   return createElement('h1','hello')
  // }

  // render : createElement => { 
  //   return createElement('h1','hello')
  // }

  // render : h => h('h1','hello')

  render : h => h(APP)
}).$mount('#app')