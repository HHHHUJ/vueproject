<template>
  <section class="section">
      <c-head></c-head>
      <div class="swiper-container sw-0" id="pic-swiper">
              <div class="swiper-wrapper sw-1">
                  <div class="swiper-slide sw-2" v-for="(d,i) in diagramcontent" :key="i">
                      <div class="picturebox">
                            <img :src="'http://api.shigeten.net/'+d.image1" class="picimg">
                            <h1 class="dtitle">{{d.title}}</h1>
                            <p class="authorbrief">{{d.authorbrief}}</p>
                            <div class="textcontent">
                                <p class="text1">{{d.text1}}</p>
                                <p class="text2">{{d.text2}}</p>
                            </div>
                      </div>
                  </div>
              </div>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";
import Head from "./head.vue";
import { Toast } from 'mint-ui';
export default {
    components:{
      "c-head":Head
    },
    computed:{
        ...mapState([
            "diagramcontent" 
        ])
    },
    mounted(){
        var that = this;
        this.$nextTick(()=>{
            this.mySwiper = new Swiper("#pic-swiper",{
                initialSlide:0,
                direction:"horizontal",
                loop:false,
                autoplay:false,
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
