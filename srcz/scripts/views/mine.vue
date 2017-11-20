<template>
   <section class="section">
       <div class="mine">
           <div class="head">
               <div class="circle">
                  <i class="iconfont icon-wode1"></i> 
               </div>
               <div class="login" v-show="loginshow">
                    <router-link :to="{name:'login'}">
                        <mt-button plain>登录</mt-button>
                    </router-link>
                    <router-link :to="{name:'register'}">
                        <mt-button plain>注册</mt-button>
                    </router-link>
               </div>
               <div class="logined login" v-show="!loginshow">
                   <h1>{{uname}}</h1>
                   <mt-button plain @click="logout">退出登录</mt-button>
               </div>
           </div>
           <div class="main" v-for="(m,i) in mineData" :key="i">
               <router-link :to="{name:m.name,params:{title:m.title}}">
                   <ul>
                       <li>
                           <div class="left">
                                <i class="iconfont" v-html="m.icon"></i>
                                <span>{{m.title}}</span>
                            </div>
                            <div class="right">
                                <i class="iconfont icon-right"></i>
                            </div>
                       </li>
                   </ul>
               </router-link>
           </div>
           <div class="switchs">
               <div class="li">
                   <div class="l">
                       <i class="iconfont icon-yejianmoshi"></i>
                        <span>夜间模式</span>
                   </div>
                   <div class="r">
                       <mt-switch :value.sync="value"></mt-switch>
                   </div>
               </div>
           </div>
       </div>
  </section>
</template>

<script>
import {mapState} from "vuex";
import {setCookie,getCookie,removeCookie} from "../utils/cookie.js";
import router from "../router"
export default {
    data(){
        return {
            loginshow:true,
            uname:""
        }
    },
    computed:{
        ...mapState([
            "mineData",
            "value"
        ])
    },
    mounted(){
        var name = getCookie('username');
        this.uname = name;
        if(this.uname == ''){
            this.loginshow = true;
            
        }else{
            this.loginshow = false;
        }
    },
    methods:{
        logout(){
            removeCookie('username');
            router.go(0);
        }
    }
}
</script>

<style>

</style>
