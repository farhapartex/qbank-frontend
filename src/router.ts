import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            authRequired: true,
            access_level: 0
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import("./views/Profile.vue"),
        meta: {
            authRequired: true,
            access_level: 0
        }
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import("./views/Auth.vue"),
        meta: {
            visitorRequired: true,
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import("./views/Logout.vue"),
    },
    {
        path: '/add-question',
        name: 'addQuestion',
        component: () => import("./views/PostQuestion.vue"),
        meta: {
            authRequired: true,
            access_level: 0
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router