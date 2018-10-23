// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'iview/dist/styles/iview.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {Message} from 'iview'
import ModalWarning from '@/components/modal_warning/index' // 没有用npm安装的不能直接 import ModalWarning from 'ModalWarning' 这样引入

Vue.prototype.$Message = Message
Vue.use(VueRouter)
Vue.use(ModalWarning)

const Index = resolve => require(['@/pages/admin/index'], resolve)

const routes = [
    {
        path: '/',
        component: Index,
        meta: {title: 'PC端演示首页'}
    }
]

const router = new VueRouter({
    routes
})

router.afterEach((to, from) => {
    if (to && to.meta && to.meta.title) {
        document.title = to.meta.title
    }
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
    router
}).$mount('#app')
