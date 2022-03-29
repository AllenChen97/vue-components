<template>
  <div id="app">
    
    <h3 ref="abc">hello</h3>
    <School ref="cba"></School>

    <button @click="showDom"></button>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  methods:{
    showDom(){
      // 对于Dom里面的ref和id 没有区别，就是一个标记属性
      // 但对于足见标签来说就是VueComponent，后期学组件之间的关联的时候拿到VC是很有用的
      console.log(this.$refs);
    }
  },
  components: {
    School
  }
}
</script>
