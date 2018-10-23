// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import {init} from 'bh-mobile-sdk'
import {setTitle} from '@/utils/sdk'
const Index = resolve => require(['@/pages/mobile/index'], resolve)

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Index, meta: {title: '移动端演示首页'}}
]

const router = new VueRouter({
    routes
})

router.afterEach((to, from) => {
    if (to && to.meta && to.meta.title) {
        setTitle(to.meta.title)
    }
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// init mobile sdk first
init(() => {
    BH_MOBILE_SDK.UI.setBouncesEnabled(false) // ios 弹性滚动问题

    new Vue({
        router
    }).$mount('#app')
})
