<template>
  <div>
    <h3>student_id: {{id}}</h3>
    <h3>student_name: {{sname}}</h3>
  </div>
</template>

<script>
export default {
  name: "cp-StudentList",
  data() {
    return {

    };
  },
  props:['id','sname']
};
</script>