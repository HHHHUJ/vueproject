<template>
  <div class="log">
    <c-minehead></c-minehead>
    <h1 v-show="show">{{tishi}}</h1>
     <div class="loginbox">
        <mt-field label="用户名" placeholder="请输入用户名" :state="userstatus" v-model="username" @input="changeuser"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" :state="passstatus" v-model="password" @input="changepass"></mt-field>
        <mt-button type="danger" size="large" @click="confirm">登录</mt-button>
     </div>
  </div>
</template>

<script>
import router from "../router"
import Minehead from "./minehead.vue";
import {mapState,mapActions} from "vuex";
import axios from "axios";
import {setCookie,getCookie} from "../utils/cookie.js";
export default {
  data(){
    return {
      username:"",
      password:"",
      userstatus:"",
      passstatus:"",
      returnstate:"",
      show:false,
      tishi:""
    }
  },
    components:{
      "c-minehead":Minehead
    },
    computed:{
      ...mapState([
       
      ])
    },
    methods:{
      changeuser(){
        if ((/([\u4e00-\u9fa5]|(\w)){2,15}/).test(this.username)){
            this.userstatus = 'success'
        }else if(this.username==''&&this.password==''){
            this.userstatus = '';
            this.passstatus = '';
        }else{
            this.userstatus = 'error'
        }
      },
      changepass(){
          if ((/\w{5,15}/).test(this.password)){
              this.passstatus = 'success'
          }else if(this.username==''&&this.password==''){
              this.userstatus = '';
              this.passstatus = '';
          }else{
              this.passstatus = 'error'
          }
      },
      confirm(){
        var data = {username:this.username,password:this.password}
           axios.get("http://localhost:7000/login",{
                params:data
            })
              .then(res=>{
                 return res.data;
              })
              .then(json=>{
                this.returnstate = json;
                if(this.username==''||this.password==''){
                    this.tishi = '用户名或密码不能为空';
                    this.show = true;
                }else if(this.passstatus=='error' || this.userstatus=='error'){
                    this.tishi = '用户名或密码格式不正确';
                    this.show = true;
                }
                else if(this.returnstate == '0'){
                  this.tishi = '该用户不存在';
                  this.show = true;
                }
                else{
                    this.tishi = '登录成功,即将跳转';
                    this.show = true;
                    setCookie('username',this.username,3600*24*7); 
                    setTimeout(function(){
                        router.push("/mine")
                    },1000)
                }
              })
           
      }
    },
}
</script>

<style>

</style>

 
