<style scoped>
body {
  background-image: url(../assets/images/back.jpg);
  background-size: cover;
}
.container {
  text-align: center;
}
.title {
  color: white;
}
.login {
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: rgb(232, 226, 216, 0.8);
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -200px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px gray;
}
.login img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 30px;
}
.l-input {
  box-sizing: border-box;
  width: 220px;
  height: 28px;
  margin-bottom: 22px;
  padding-left: 30px;
  border-radius: 5px;
  border: 1px solid #d6d5d4;
  background-color: inherit;
  background-color: rgb(244, 241, 236, 0.8);
}
.username {
  margin-top: 22px;
  background-image: url(../assets/images/user.png);
  background-repeat: no-repeat;
  background-position: 7px 5px;
}
.psw {
  background-image: url(../assets/images/lock.png);
  background-repeat: no-repeat;
  background-position: 7px 5px;
}
.btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn button {
  width: 220px;
  height: 30px;
  border: unset;
  border-radius: 5px;
  font-size: 14px;
  color: white;
}
.btn button:nth-child(1) {
  background-color: #9acd32;
  margin-bottom: 20px;
}
.btn button:nth-child(2) {
  background-color: #dc143c;
  margin-bottom: 22px;
}
.forgot {
  width: 220px;
  margin: 0 auto;
  text-align: right;
}
.forgot a {
  font-size: 14px;
  font-weight: 700;
  color: #333333;
}
</style>
<template>
  <div class="container">
    <h1 class="title">Hello!&nbsp;Wellcome to DouZhi-IT!</h1>
    <div class="login">
      <img src="../assets/images/Boy.jpg" alt="" />
      <form action="">
        <input
          v-model="userName"
          class="username l-input"
          type="text"
          placeholder="Username"
        />
        <input
          v-model="password"
          class="psw l-input"
          type="password"
          placeholder="Password"
        />
      </form>
      <div class="btn">
        <button class="btn1" @click="login()">Submit</button>
        <button class="btn2">Register</button>
      </div>
      <div class="forgot">
        <a href="">Forgot Password?</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
        ...mapGetters([
            'loginIn'
        ])
    },
  data() {
    return {
      userName: "",
      password: "",
    };
  },

  methods: {
    login() {
      if (this.userName !== "" && this.password !== "") {
        // 利用缓存存放用户信息
        this.$store.commit("setLoginIn", true);
        console.log(this.$store.state.user.loginIn)
        // this.$store.commit("setUsername", userName);
        alert("登陆成功");
        this.$router.push({path:'/'});
      } else {
        alert("请输入用户名和密码");
      }
    },
    goRegister() {
      this.$router.push({ path: "/register" });
    },
  },

  beforeRouteEnter(to, from, next) {
    // ...
    window.document.body.style.backgroundImage =
      "url(/static/img/back.59f0049.jpg)";
    window.document.body.style.backgroundSize = "cover";

    next();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    window.document.body.style.backgroundImage = "unset";
    window.document.body.style.backgroundSize = "unset";
    next();
  },
};
</script>