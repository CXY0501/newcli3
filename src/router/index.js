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
            meta:{
                title: 'HOME'
            },
            children:[
                // {
                //     path:'',
                //     redirect: 'news'
                // },
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
            component: () => import ('../components/about'),
            meta:{
                title: 'ABOUT'
            },
            beforeEnter: (to,from,next) => {
                console.log('ABOUT beforeEnter')
                next()
            }
        },
        {
            path:'/profile',
            component: () => import ('../components/profile'),
            meta:{
                title: 'PROFILE'
            },
            created(){
                console.log('profile created')
            },
            destroyed(){
                console.log('profile destroyed')
            }
        }
    ],
    mode:'history'
})

router.beforeEach((to,from,next) => {
    document.title = to.meta.title;
    console.log('+++++++');
    next()
})

router.afterEach((to,from) => {
    console.log('-------');
})

export default router
