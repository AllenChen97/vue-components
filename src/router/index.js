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


const router = new VueRouter({
    mode:'hash', 
    // 默认是hash，避免路由无法分辨 url 每一段是前端路由还是后端路由
    // history 没有 /#/ 好看点
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
                    name: 'StudentList',
                    path: 'StudentList',
                    component: StudentList,
                    children: [
                        {
                            name: 'detail1',
                            path: 'Detail',
                            component: Detail,
                            props({ query }) {
                                return {
                                    id: query.id,
                                    sname: query.sname
                                }
                            },
                            meta: { isAuth: true }
                        }
                    ],
                    meta: { title: 'detail' }
                },
                {
                    name: 'StudentList2',
                    path: 'StudentList2',
                    component: StudentList2,
                    children: [
                        {
                            name: 'detail2',
                            path: 'Detail',
                            component: Detail,
                            props({ query }) {
                                return {
                                    id: query.id,
                                    sname: query.sname
                                }
                            },
                            meta: { isAuth: true }
                        }
                    ],
                    meta: { title: 'detail' }
                }
            ]
        }
    ],
})

router.afterEach((to, from) => {
    document.title = to.meta.title || '小陈系统'
})

export default router