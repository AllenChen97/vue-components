<template>
  <div id="app">
    <!-- 子组员给父组件传输数据的3种方法: 事件回调都在App中  -->

    <!-- 1.通过props实现 子组件给父组件传输数据 -->
    <!-- 原理：父组件给子组件传入方法，让子组件调用，Todolist案例用过 -->
    <!-- <School :getxxx="getxxx"/> -->

    <!-- 2.定义自定义事件 接收子组件$emit出来的参数，事件名前加v-on: 或 @ -->
    <!-- 原理：父组件给子组件传入自定义事件@printName，让子组件$emit携带参数触发 -->
    <!-- <School @printName="getSchoolName"/> -->

    <!-- 3.ref 实现，相较方法2可以自定义延时挂载或其它操作 -->
    <!-- 原理：ref先标记VC实例，挂载时传入自定义事件@printName和对应触发的method -->
    <!-- <School ref="school"/> -->
    <School ref="school" @click.native="show"/>

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
    // 方法1：
    getxxx(){
      console.log("fuck bitch");
    },
    // 方法2，3
    getSchoolName(name,...params){
      console.log("get School-: ", name, params);
    },
    show(){
      console.log('给component赋原生事件');
    }
  },
  // 方法3 用$refs调出已标记的student VC实例进行添加$on 事件，将getSchoolName方法传入==>printName事件中
  mounted(){
    setTimeout(() => {
      this.$refs.school.$on('printName',this.getSchoolName)
      // 只触发一次
      // this.$refs.student.$once('printName',this.getSchoolName)
    }, 1000);
  }
}
</script>
