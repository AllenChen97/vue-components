<template>
  <div>
    <ol>
      <li v-for="(name, index) in this.students" :key="index">
        <router-link :to="`/Student/StudentList2/Detail?id=${index}&name=${name}`" active-class="">
          {{ name }}
        </router-link>
      </li>
    </ol>

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