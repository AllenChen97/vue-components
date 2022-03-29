<template>
  <div>
    <h3>StudentList below:</h3>

    <ol>
      <li v-for="(sname, index) in this.students" :key="index">

        <!-- <router-link :to="`/StudentList2/Detail/${index}/${sname}`"> -->
          
        <router-link 
        :to="{
          name:'detail2',
          query:{
            id:index,
            sname
          }
        }"
        >
          
          {{ sname }}
        </router-link>
        &nbsp;<button @click="pushShow(index,sname)">PUSH</button> &nbsp;
        <button @click="replaceShow(index,sname)">REPLACE</button>

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
  methods:{
    pushShow(index,sname){
      this.$router.push({
          name:'detail2',
          query:{
            id:index,
            sname
          }
        })
    },
    replaceShow(index,sname){
      this.$router.replace({
          name:'detail2',
          query:{
            id:index,
            sname
          }
        })
    },
  }
};
</script>