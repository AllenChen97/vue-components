<template>
  <div id="app">
    <school>
      <template scope="{title}">
        <ul>
          <li v-for="(t, index) in title" :key="index">{{ t }}</li>
        </ul>
      </template>

      <!-- <template scope="data">
        <ul>
          <li v-for="(t, index) in data.title" :key="index">{{ t }}</li>
        </ul>
      </template> -->
      
    </school>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
  },
};
</script>
