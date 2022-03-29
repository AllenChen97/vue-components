import Vue from 'vue'
// Vuex 是插件
import Vuex from 'vuex'
Vue.use(Vuex)

import VueRouter from 'vue-router'

import School from '../pages/School'
import Student from '../pages/Student'
import StudentList from '../pages/StudentList'
import StudentList2 from '../pages/StudentList2'
import Detail from '../pages/Detail'
// when shifting routes, the shifted one would be destroied
// each application has one router, and each component would also have a $router


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
                    path: 'StudentList',
                    component: StudentList,
                    children:[
                        {
                            path: 'Detail',
                            component: Detail
                        }
                    ]
                },
                {
                    path: 'StudentList2',
                    component: StudentList2,
                    children:[
                        {
                            path: 'Detail',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ],
})
