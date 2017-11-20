<template>
  <div class="about">
        <c-minehead></c-minehead>
        <div class="banner"></div>
        <p :class="'aboutcontent'">
          每晚十点更新</br>一篇影评&nbsp;一篇文章</br>每晚入睡前用上十分钟读到最美内容</br></br>影评独特而温馨&nbsp;文章兼顾见识与审美</br>也许很长也许很短&nbsp;但必定值得耐心阅读
        </p>
        <div class="aboutfoot">
          <p>投稿：<span>shigeten@qq.com</span>&nbsp;&nbsp;合作：<span>551608331(QQ)</span></p>
          <p>监制：半杯咖啡&nbsp;|&nbsp;技术：火荼&nbsp;|&nbsp;视觉：大绿&nbsp; & &nbsp;晗哥</p>
          <p>Ten&nbsp;Android&nbsp;V1.5</p>
        </div>
  </div>
</template>

<script>
import Minehead from "./minehead.vue";
import {mapState} from "vuex";
export default {
    components:{
      "c-minehead":Minehead
    },
    computed:{
      ...mapState([
      ])
    }
}
</script>

<style>

</style>


