<template>
  <div>
    <h2>student</h2>

    <router-link to="/Student/StudentList">Detail</router-link>&nbsp;
    <router-link to="/Student/StudentList2">Detail 2</router-link>


    <!-- <keep-alive include="cp-StudentList2"> -->
    <keep-alive :include="['cp-StudentList','cp-StudentList2']">

      <router-view></router-view>
      
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "cp-Student",
  data() {
    return {
    };
  },
  // mounted(){
  //   this.time = setInterval(() => {
  //     console.log(111);
  //   }, 1000);
  // },

  // beforeDestroy(){
  //    clearInterval(this.timer)
  // },

  // when need to keep the components alive, beforeDestroy would not work
  // use deactivated insteadly
  activated(){
    this.time = setInterval(() => {
      console.log(111);
    }, 1000);
  },

  deactivated(){
    clearInterval(this.timer)
  },
};
</script>