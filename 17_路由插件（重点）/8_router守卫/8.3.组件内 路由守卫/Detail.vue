<template>
  <div>
    <h3>student_id: {{ id }}</h3>
    <h3>student_name: {{ sname }}</h3>
  </div>
</template>

<script>
export default {
  name: "cp-StudentList",
  data() {
    return {};
  },
  props: ["id", "sname"],

  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("aa")) {
        alert("抱歉你没有权限访问");
      } else {
        next();
      }
    } else {
      next();
    }
  },

  beforeRouteLeave(to, from, next) {
    console.log("要溜了");
    next();
  },
};
</script>