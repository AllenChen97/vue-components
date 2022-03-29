<template>
  <div>
    <h3>student_id: {{$route.query.id}}</h3>
    <h3>student_name: {{$route.query.name}}</h3>
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