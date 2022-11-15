import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import store from '@/store/index.js'

Vue.use(Router)

const router = new Router({
  routes: [
    // 小米二，如果配了两个路由，跳转第一次出现的
    // 方式一，需要引入组件
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'xiaomi',
          //异步加载组件，访问到/Test才会加载，避免首页一下子加载太多组件
          component: resolve => require(['../components/Xiaomi.vue'], resolve)
        },
        {
          path: 'nitai',
          component: resolve => require(['../components/Nitai.vue'], resolve)
        },
        {
          path: 'jiudian',
          component: resolve => require(['../components/Jiudian.vue'], resolve)
        },
        {
          path: 'login',
          component: resolve => require(['../components/Login.vue'], resolve)
        },
        {
          path: 'admin',
          component: resolve => require(['../views/admin/Show.vue'], resolve),
          children: [{
            name: 'user',
            path: 'user',
            component: resolve => require(['../views/admin/User.vue'], resolve),
          }]
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.path.includes('/admin')){
    if(store.state.user.loginIn === true){
      next()
    }else{
      alert('请先登录')
      next('/login')
    }
    
  }else{
    next()
  }
  
})

export default router
