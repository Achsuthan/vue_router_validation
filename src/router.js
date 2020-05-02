import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: "Login",
            component: () => import('./Views/Login')
        },
        {
            path: '/home',
            name: "Home",
            component: () => import('./Views/Home')
        },
        {
            path: '*',
            name: "Login2",
            component: () => import('./Views/Login')
        }
    ]
})

export default router