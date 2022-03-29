<template>
  <div id="app">
    <School></School>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
import School from './components/School.vue'

import {hunhe} from './mixin.js'
//全局引入Vue.minxin(mixin)

export default {
  name: 'App',
  components: {
    School
  },
  mixins:['mixin']
}
</script>
