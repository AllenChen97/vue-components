import Vue from 'vue'
// Vuex 是插件
import Vuex from 'vuex'
Vue.use(Vuex)

const counting = {
    namespaced:true,
    actions: {
        wait3add(context, value) {
            console.log(context);
            setTimeout(() => {
                context.commit('add', value)
            }, 3000);
        }
    },
    mutations: {
        add(state, value) {
            state.sum += value;
        },
        substract(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

export default new Vuex.Store({
    modules:{
        counting
    }
})