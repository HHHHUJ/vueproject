<template>
  <section class="section">
      <c-head></c-head>
        <div class="swiper-container sw-0" id="art-swiper">
            <div class="swiper-wrapper sw-1">
                <div class="swiper-slide sw-2" v-for="(n,i) in novelcontent" :key="i">
                    <h1>{{n.title}}</h1>
                    <p class="author">作者：{{n.author}}&nbsp;|&nbsp;阅读量：{{n.times}}</p>
                    <p class="summary">{{n.summary}}</p>
                    <div class="intro">
                        <p>{{n.text}}</p>
                        <h3>{{n.author}}</h3>
                        <h4>{{n.authorbrief}}</h4>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
import {mapState} from "vuex";
import Head from "./head.vue";
import "../utils/swiper-3.3.1.min.js";
import { Toast } from 'mint-ui';
export default {
    components:{
      "c-head":Head
    },
    computed:{
        ...mapState([
            "novelcontent"
        ])
    },
    mounted(){
        var that = this;
        this.$nextTick(()=>{
            this.mySwiper = new Swiper("#art-swiper",{
                initialSlide:0,
                direction:"horizontal",
                loop:false,
                autoplay:false,
                speed:1000,
                effect:"slide",
                autoHeight:true,
                slidesPerView:1,
                pagination:".swiper-pagination",
                paginationClickable:true,
                observer:true,
                observeParents:true,
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
