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
                    children: [
                        {
                            name: 'detail1',
                            path: 'Detail',
                            component: Detail,
                            props({query}) {
                                return {
                                    id: query.id,
                                    sname: query.sname
                                }
                            }
                        }
                    ]
                },
                {
                    path: 'StudentList2',
                    component: StudentList2,
                    children: [
                        {
                            name: 'detail2',
                            path: 'Detail',
                            component: Detail,
                            // 1: concrete
                            // props:{a:1,b:2}

                            // 2. transmit all parameters in params, with props 
                            // props:true

                            // 3. function
                            // props($router) {
                            //     return {
                            //         id: $router.query.id,
                            //         sname: $router.query.name
                            //     }
                            // }
                            props({query}) {
                                return {
                                    id: query.id,
                                    sname: query.sname
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
})
