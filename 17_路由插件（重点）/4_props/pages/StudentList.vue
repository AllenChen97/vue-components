<template>
  <div>
    <h3>StudentList below:</h3>
    <ul>
      <li v-for="(sname, index) in this.students" :key="index">

        <router-link :to="`/Student/StudentList/Detail?id=${index}&sname=${sname}`">
          {{ sname }}
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import Detail from "./Detail";

export default {
  name: "cp-StudentList2",
  components: {Detail},
  data() {
    return {
      students: {
        "01": "Allen",
        "02": "Kenny",
        "03": "yoyo",
      },
    };
  },
};
</script>