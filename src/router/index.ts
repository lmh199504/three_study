import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/DayOne/index.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/line',
        name: 'Line',
        meta: {
            title: '线'
        },
        component: () => import('@/views/line/index.vue')
    },
    {
        path: '/text',
        name: 'Text',
        component: () => import('@/views/text/index.vue')
    },
    {
        path: '/code',
        name: 'code',
        component: () => import('@/views/code/index.vue')
    },
    {
        path: '/dayTwo',
        name: 'DayTwo',
        component: () => import('@/views/dayTwo/index.vue')
    },
    {
        path: '/dayThree',
        name: 'DayThree',
        component: () => import('@/views/dayThree/index.vue')
    },
    {
        path: '/dayFour',
        name: 'dayFour',
        component: () => import('@/views/dayFour/index.vue')
    },
    {
        path: '/dayFive',
        name: 'dayFive',
        component: () => import('@/views/dayFive/index.vue')
    },
    {
        path: '/day6',
        name: 'day6',
        component: () => import('@/views/day6/index.vue')
    },
    {
        path: '/day7',
        name: 'day7',
        component: () => import('@/views/day7/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
