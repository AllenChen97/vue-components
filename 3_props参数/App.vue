<template>
  <div id="app">
    <School name="dddd" age="18"></School>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    School
  },
  // 1.简易写法
  // props:['name']，

  // 2.类型限制
  // props:{
  //   name:String,
  //   age:Number
  // },

  // 3.类型限制
  props:{
    name:{
      type:String,
      required:true,
      default:'aaa'
    },
    age:{
      type:Number,
      required:true,
      default:18
    }
  }
}
  //最后注意：props属性不能修改，如要修改，请在data中复制一份数据进行修改，否则直接修改console会报错
</script>
