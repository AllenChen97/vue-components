import Vue from 'vue'
// Vuex 是插件
import Vuex from 'vuex'
Vue.use(Vuex)

import VueRouter from 'vue-router'

import School from '../pages/School'
import Student from '../pages/Student'
import Detail from '../pages/Detail'
import Detail2 from '../pages/Detail2'
// when shifting routes, the shifted one would be destroied
// each application has one router, and each component would also have a $route


export default new VueRouter({
    routes: [
        {
            path: '/School',
            component: School
        },
        {
            path: '/Student',
            component: Student,
            children: [
                {
                    path: 'Detail',
                    component: Detail,
                },
                {
                    path: 'Detail2',
                    component: Detail2,
                }
            ]
        }
    ],
})
