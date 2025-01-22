<template>
  <div class="bg">
    <div class="login-box">
      <p>十方智育后台管理系统</p>
      <form action="">
        <el-input v-model="input"  style="width: 240px;" placeholder="账号" :prefix-icon="UserFilled"/>
        <el-input v-model="input" style="width: 240px;padding-top: 15px;" type="password" placeholder="密码" :prefix-icon="Lock"
          show-password /> <br />
        <div class="yanzheng">
          <el-input v-model="input" style="width: 150px" placeholder="验证码" :prefix-icon="CircleCheck" />
          <img src="../imgs/yzm.gif" style="width: 80px;height: 30px;">
        </div>
        <p style="text-align: left;"><el-checkbox v-model="checked1" label="记住密码" size="large" /><br></p>
        
        <el-button type="primary" style="width: 100%;" @click="onLogin()">登录</el-button>
      </form>
    </div>
  </div>
  
</template>

<script setup>

import { UserFilled, Lock,CircleCheck } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import  {useStore}  from 'vuex'
const store = useStore()

const router = useRouter()

const form=reactive({
  usename:"110",
  password:"120",
})
const onLogin = () => {
  router.replace('/Home')
}
const checked1 = ref(true)
</script>


<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-image: url('../imgs/bg.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 100%;
  max-width: 380px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.login-box p {
  padding-top: 10px;
  text-align: center;
  font-size: 20px;
  color: #7986ab;
}

form {
  padding-top: 30px;
  width: 240px;
  text-align: center;
  margin: 0 auto;
}
.yanzheng{
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>