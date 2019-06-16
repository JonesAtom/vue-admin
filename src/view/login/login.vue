<template>
  <div class="login-content">
    <div class="login-item">
      <span class="item-name">用户名：</span>
      <el-input placeholder="请输入用户名" v-model="name" clearable></el-input>
    </div>
    <div class="login-item">
      <span class="item-name">密码：</span>
      <el-input class="item-input" placeholder="请输入内容" v-model="password" show-password></el-input>
    </div>
    <div class="login-item">
      <el-button type="primary" @click="loginTap">登陆</el-button>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import fetch from '@/utils/fetch'
import loginApi from "@/api/login";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  mounted(){
    console.log(123)
    fetch({
      url:'/user/get-user-info',
      params:{name:'atom'},
      method:'GET'
    })
  },
  methods: {
    loginTap() {
      let data = {
        name: this.name,
        password: this.password
      };
      if (!data.name || !data.password) {
        Message.error("请填写登陆信息！");
        return;
      }
      loginApi.checkLogin(data)
    }
  }
};
</script>

<style lang='scss' scoped>
.login-content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .login-item {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    .item-name {
      width: 100px;
      font-size: 18px;
      color: #333;
    }
    .item-input {
    }
  }
}
</style>