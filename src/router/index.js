import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/login'

    },
    {
        path: '/login',
        component: Login,
        name: "Login"
    },
    {
        path: '/main',
        component: Main,
        name: "Main",
        beforeEnter: (to, from, next) => {
            console.log('这是一个单个路由守卫/进入某个路由之前调用！！！！！！！！！')
            next()
        }

    }
]

const router = new VueRouter({
    routes,
    mode: "history",
})

// router.beforeEach((to, from, next) => {
//     console.log('这是一个全局前置首位')
//     next()
// })
// router.afterEach((to, from) => {
//     console.log('这是一个后置全局守卫')
// })
export default router