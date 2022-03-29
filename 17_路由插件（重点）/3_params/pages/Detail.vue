<template>
  <div>
    <h3>student_id: {{$route.params.id}}</h3>
    <h3>student_name: {{$route.params.sname}}</h3>
  </div>
</template>

<script>
export default {
  name: "cp-StudentList",
  data() {
    return {
      
    };
  },
};
</script>