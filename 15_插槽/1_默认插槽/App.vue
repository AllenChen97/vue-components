<template>
  <div id="app">
    <school>
      <ul>
        <li v-for="(t,index) in this.title" :key="index">{{t}}</li>
      </ul>
    </school>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  data(){
    return {
      title:['a','b','c'],
      title2:['e','f','g']
    }
  },
  components: {
    School
  }
}
</script>
