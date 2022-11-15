const config = {
    state:{
        loginIn:false, //记录用户登录
    },
    //取值方式
    getters: { 
        loginIn: state => {
            let loginIn = state.loginIn
            if(!loginIn){
                loginIn = JSON.parse(window.sessionStorage.getItem('loginIn'))
            }
            return loginIn;
        }
    },
    mutations: {
        setLoginIn: (state,loginIn) => {
            state.loginIn = loginIn
            window.sessionStorage.setItem('loginIn',JSON.stringify(loginIn))
        }
    }
}

export default config