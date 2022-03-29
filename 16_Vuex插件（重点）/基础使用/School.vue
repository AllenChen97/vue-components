<template>
  <div>
    <h3>累计求和:{{$store.state.sum}}</h3>
    <h3>累计求和:{{sum}}</h3>

    <h3>放大10倍:{{$store.getters.bigSum}}</h3>
    <h3>放大10倍:{{bigSum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <!-- <button @click="increase">加n</button>
    <button @click="decrease">减n</button>
    <button @click="increaseLater">3秒后加n</button> -->

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
    // 代替this.$store.dispatch('wait3add',this.n)
    ...mapActions(['wait3add']),
    // 代替this.$store.commit('substract',this.n)
    ...mapMutations(['add','substract']),
    increase(){
      this.$store.commit('add',this.n)
    },
    decrease(){
      this.$store.commit('substract',this.n)
    },
    increaseLater(){
      this.$store.dispatch('wait3add',this.n)
    }
  },
  computed:{
    // 代替this.$store.state.sum 的冗长写法
    ...mapState(['sum']),
    // 代替this.$store.getters.bigsum
    ...mapGetters(['bigSum']),

  }
};
</script>