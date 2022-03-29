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
};
</script>