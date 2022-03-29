<template>
  <div>
    <ul>
      <li v-for="(name, index) in this.students" :key="index">
        <!-- <router-link :to="`/Student/StudentList/Detail?id=${index}&name=${name}`" active-class=""> -->
          
        <router-link 
        :to="{
          path:'/Student/StudentList/Detail',
          query:{
            id:index,
            name:name
          }
        }" 
        active-class="">
          
          {{ name }}
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