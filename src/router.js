import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: "Login",
            component: () => import('./Views/Login'),
            meta:{
                isAuth: false
            }
        },
        {
            path: '/home',
            name: "Home",
            component: () => import('./Views/Home'),
            meta:{
                isAuth: true
            }
        },
        {
            path: '*',
            name: "Login2",
            component: () => import('./Views/Login'),
            meta:{
                isAuth: false
            }
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record => record.meta.isAuth)){
        let user = JSON.parse(localStorage.getItem('user'))
        if(!user){
            next('/login')
        }
    }
    next()
})

export default router