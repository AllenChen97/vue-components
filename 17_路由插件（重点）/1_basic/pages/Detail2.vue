<template>
  <div>
    <ol>
      <li v-for="(s,index) in this.students" :key="index">{{s}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "cp-Detail2",
  data() {
    return {
      students:['aa','bb','cc']
    };
  }
};
</script>