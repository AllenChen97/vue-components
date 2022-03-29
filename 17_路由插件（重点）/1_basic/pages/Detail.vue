<template>
  <div>
    <ul>
      <li v-for="(s, index) in this.students" :key="index">{{ s }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cp-Student",
  data() {
    return {
      students: ["aa", "bb", "cc"],
    };
  },
};
</script>