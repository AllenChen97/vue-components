<template>
  <div id="app">
    <School></School>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    School
  }
}
</script>

<style scoped>
/* 建议书写成这样避免组件之间的样式冲突，scoped让作用域限制在组件内 */

/* 另外，lang="" 默认为css */
    
</style>