import router from './router/index'
import store from './store/index'

router.beforeEach((to, from, next) => {
  const {path} = to
  if (path.indexOf('/admin') === 0) {
    const loginIn = store.getters.loginIn || sessionStorage.getItem('loginIn')
    if (loginIn) {
      next()
    } else {
      alert('请先登录')
      next('/login')
    }

  } else {
    next()
  }

})