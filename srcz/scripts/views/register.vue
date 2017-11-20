<template>
  <div class="log">
    <c-minehead></c-minehead>
       <h1 v-show="show">{{tishi}}</h1>
       <div class="loginbox">
          <mt-field label="用户名" placeholder="请输入用户名" :state="userstatus"  v-model="username" @input="changeuser"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" class="reg-2" :state="passstatus" v-model="password" @input="changepass"></mt-field>
          <mt-field label="确认密码" placeholder="请再次输入密码" type="password" :state="repassstatus" v-model="repass" @input="changerepass"></mt-field>
          <mt-button type="primary" size="large" @click="confirm">注册</mt-button>
       </div>
  </div>
</template>

<script>
import Minehead from "./minehead.vue";
import axios from "axios";
import router from "../router";
export default {
  data(){
    return {
      userstatus:"",
      passstatus:"",
      repassstatus:"",
      username:"",
      password:"",
      repass:"",
      show:false,
      tishi:"",
      returnstate:""
    }
  },
    components:{
      "c-minehead":Minehead
    },
     methods:{
      changeuser(){
        if ((/([\u4e00-\u9fa5]|(\w)){2,15}/).test(this.username)){
            this.userstatus = 'success'
        }else if(this.username==''){
            this.userstatus = '';
        }else{
            this.userstatus = 'error'
        }
      },
      changepass(){
          if ((/\w{5,15}/).test(this.password)){
              this.passstatus = 'success'
          }else if(this.password==''){
              this.passstatus = '';
          }else{
              this.passstatus = 'error'
          }
      },
       changerepass(){
          if ((/\w{5,15}/).test(this.repass)){
              this.repassstatus = 'success'
          }else if(this.repass==''){
              this.repassstatus = '';
          }else{
              this.repassstatus = 'error'
          }
      },
      confirm(){
        var data = {username:this.username,password:this.password}
           axios.get("http://localhost:7000/register",{
                params:data
            })
              .then(res=>{
                 return res.data;
              })
              .then(json=>{
                this.returnstate = json;
                if(this.username==''||this.password==''||this.repass==''){
                    this.tishi = '用户名或密码不能为空';
                    this.show = true;
                }else if(this.password!=this.repass){
                    this.tishi = '两次输入密码不一致';
                    this.show = true;
                }else if(this.passstatus=='error' || this.userstatus=='error'){
                    this.tishi = '用户名或密码格式不正确';
                    this.show = true;
                }else if(this.returnstate == '0'){
                  this.tishi = '该用户已存在,请重新注册';
                  this.show = true;
                }else{
                    this.tishi = '登录成功,即将跳转';
                    this.show = true;
                    setTimeout(function(){
                        router.push("/mine")
                    },1000)
                }  
              })
           
      }
    }
}
</script>

<style>

</style>
