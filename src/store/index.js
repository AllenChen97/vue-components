import Vue from 'vue'
// Vuex 是插件
import Vuex from 'vuex'
Vue.use(Vuex)

const counting = {
    namespaced:true,
    actions: {
    },
    mutations: {
    },
    state: {
    },
    getters: {
    }
}

export default new Vuex.Store({
    modules:{
        counting
    }
})