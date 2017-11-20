<template>
  <div class="collect">
        <c-minehead></c-minehead>
        <div class="collection">
              <i class="iconfont icon-shenglvehao"></i>
              <p>点击文章右下角红色图标</p>
              <p>即可找到收藏按钮</p>
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
      ...mapState({
         
      })
    }
}
</script>

<style>

</style>
