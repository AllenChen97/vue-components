<template>
  <div id="app">
    <School/>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    School
  },
  methods:{
    receiveData(...params){
      console.log(params);
    }
  },
  // 挂载时给总线绑定事件event,对应触发method方法,并接收所有传入的参数
  mounted(){
    this.$bus.$on('event',this.receiveData)
  },
  // 虽然 vc结束了,但事件总线$bus还在,需要在结束前取消绑定
  beforeDestroy(){
    this.$bus.$off('event')
  }
}
</script>
