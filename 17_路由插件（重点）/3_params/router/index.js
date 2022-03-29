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


// the component of detail has to be given 2 names, 
// otherwise the router would compile the first one it distinguished to you 

// ps: if use params proporties, must have a name in router config
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
                            name: 'detail1',
                            path: 'Detail/:id/:sname',
                            component: Detail
                        }
                    ]
                },
                {
                    path: 'StudentList2',
                    component: StudentList2,
                    children:[
                        {
                            name: 'detail2',
                            path: 'Detail/:id/:sname',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ],
})
