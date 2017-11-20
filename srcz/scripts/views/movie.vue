<template>
  <section class="section">
      <c-head></c-head>
      <div class="movie">
          <div class="swiper-container sw-0" id="main-swiper">
              <div class="swiper-wrapper sw-1">
                  <div class="swiper-slide sw-2" v-for="(c,i) in content" :key="i">
                      <img :src="'http://api.shigeten.net/'+c.imageforplay">
                      <h1>{{c.title}}</h1>
                      <p class="author">作者：{{c.author}}&nbsp;|&nbsp;阅读量：{{c.times}}</p>
                      <p class="summary">{{c.text1}}</p>
                      <div class="intro">
                        <h2>剧情简介</h2>
                        <img :src="'http://api.shigeten.net/'+c.image1">
                        <p>{{c.text2}}</p>
                        <h2>{{c.realtitle}}</h2>
                        <img :src="'http://api.shigeten.net/'+c.image2">
                        <p>{{c.text3}}</p>
                        <p>{{c.text4}}</p>
                        <p class="text5">{{c.text5}}</p>
                        <img :src="'http://api.shigeten.net/'+c.image3">
                        <img :src="'http://api.shigeten.net/'+c.image4" class="image4">
                        <h3>{{c.author}}</h3>
                        <h4>{{c.authorbrief}}</h4>
                      </div>
                  </div>
              </div>
    </div>
      </div>
  </section>
</template>

<script>
import {mapState,mapActions} from "vuex";
import Head from "./head.vue";
import Vue from "vue";
import "../utils/swiper-3.3.1.min.js";
import axios from "axios";
import { Toast } from 'mint-ui';
export default {
    data(){
      return {
        content:[]
      }
    },
    components:{
      "c-head":Head
    },
    computed:{
      ...mapState([
          
      ])
    },
    mounted(){
        var that = this;
        this.$nextTick(()=>{
            this.mySwiper = new Swiper("#main-swiper",{
                initialSlide:0,
                direction:"horizontal",
                loop:false,
                autoplay:false,
                speed:1000,
                effect:"slide",
                autoHeight:true,
                slidesPerView:1,
                observer:true,
                observeParents:true,
                resistanceRatio:0.7,//边缘抵抗力
                onInit(){
                    axios.get("http://localhost:7000/criticcontent")
                        .then(res=>{
                          that.content = res.data;
                        })
                },
                onSlideChangeEnd(swiper){
                   console.log(1)
                },
                onTouchEnd(swiper){
                    var cw = document.documentElement.clientWidth ||document.body.clientWidth;
                    if(swiper.translate<-cw*8){
                        console.log(123)
                        let instance = Toast({
                            message: '只有十篇内容可以查看',
                            position: 'bottom',
                            duration: 5000
                        });
                        setTimeout(() => {
                            instance.close();
                        },2000);
                    };
                    if(swiper.translate>0){
                         let instance = Toast({
                            message: '已是最新内容了',
                            position: 'bottom',
                            duration: 5000
                        });
                        setTimeout(() => {
                            instance.close();
                        },2000);
                    }
                }
            });
        });
    }

}
</script>

<style>

</style>


