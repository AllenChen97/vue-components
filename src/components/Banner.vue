<template>
  <div>
    <h1>Hello Welcome</h1>

    <button @click="back">back</button>
    <button @click="forward">forward</button>
    <button @click="go">go</button>

  </div>
</template>

<script>
export default {
  name: "cp-Banner",
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    go(){
      this.$router.go(2)
    }
  }
};
</script>