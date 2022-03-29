<template>
  <div>
    <h3>累计求和:{{sum}}</h3>
    <h3>放大10倍:{{bigSum}}</h3>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="add(n)">加n</button>
    <button @click="substract(n)">减n</button>
    <button @click="wait3add(n)">3秒后加n</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
export default {
  name: "School-",
  data() {
    return {
      n:1
    };
  },
  methods:{
    ...mapActions('counting',['wait3add']),
    ...mapMutations('counting',['add','substract']),
  },
  computed:{
    ...mapState('counting',['sum']),
    ...mapGetters('counting',['bigSum']),
  }
};
</script>