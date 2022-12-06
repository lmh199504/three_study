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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
