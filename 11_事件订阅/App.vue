<template>
  <div id="app">
    <School/>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    School
  },
  methods:{
    receiveData(_,params){
      console.log(params);
    }
  },
  mounted(){
    this.sub = pubsub.subscribe('hello',this.receiveData);
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.sub);
  }
}
</script>
