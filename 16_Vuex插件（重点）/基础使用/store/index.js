import Vue from 'vue'
// Vuex 是插件
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    wait3add(context,value){
        console.log(context);
        setTimeout(() => {
            context.commit('add',value)
        }, 3000);
    }
}

const mutations = {
    add(state,value){
        state.sum += value;
    },
    substract(state,value){
        state.sum -= value;
    },

}

const state = {
    sum:0
}

const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})