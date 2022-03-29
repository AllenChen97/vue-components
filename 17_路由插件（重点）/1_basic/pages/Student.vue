<template>
  <div>
    <h2>student</h2>

    <router-link to="/Student/Detail" active-class="">Detail</router-link>&nbsp;
    <router-link to="/Student/Detail2" active-class="">Detail 2</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "cp-Student",
  data() {
    return {
    };
  }
};
</script>