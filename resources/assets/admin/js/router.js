import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);



export const constantRouterMap = [
    { name: 'hello', path: '/hello', component: resolve => void(require(['./components/Hello.vue'], resolve))},
    {name: 'login', path: '/login', component: resolve => void(require(['./components/login.vue'], resolve))},
    {name: 'index', path: '/index', component: resolve => void(require(['./components/index.vue'], resolve))},
]

const router = new VueRouter({
    saveScrollPosition: true,
    
    routes: constantRouterMap
});

router.beforeEach((to, from, next) => {
    if (to.name == 'hello') {
        next({name: 'index'});
    };
    next();
});

export default router;