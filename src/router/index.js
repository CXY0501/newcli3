import VueRouter from 'vue-router'
import Vue from 'vue'
// import home from '../components/home'
// import about from '../components/about'
// import profile from '../components/profile'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect: '/home'
        },
        {
            path:'/home',
            component:  () => import ('../components/home'),
            children:[
                {
                    path:'',
                    redirect: 'news'
                },
                {
                    path: 'news',
                    component: () => import ('../components/homeNews')
                },
                {
                    path: 'message',
                    component: () => import ('../components/homeMessage')
                }
            ]
        },
        {
            path:'/about',
            component: () => import ('../components/about')
        },
        {
            path:'/profile',
            component: () => import ('../components/profile')
        }
    ],
    mode:'history'
})

export default router
