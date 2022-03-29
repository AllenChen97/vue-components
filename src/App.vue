<template>
  <div id="app">
    <Banner/>
    <hr>

    <!-- replace mode -->
    <router-link replace to="/School" active-class="">School</router-link>&nbsp;
    <router-link replace to="/Student" active-class="">Student</router-link>

    <router-view></router-view>
    
  </div>
</template>

<script>
import Banner from "./components/Banner";
import School from "./pages/School";
import Student from "./pages/Student";

export default {
  name: "App",
  components: {
    Banner,
    School,
    Student
  },
};
</script>
