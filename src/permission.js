import router from './router/index'
import store from './store/index'

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