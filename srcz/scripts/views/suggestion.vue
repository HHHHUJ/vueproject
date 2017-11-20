<template>
  <div class="suggestion">
      <c-minehead></c-minehead>
      <p>加微信或QQ反馈问题，我们会第一时间为你解决</p>
      <div class="qq">
        <section>
          <i class="iconfont icon-weixin"></i>
          微信公众账号：
          <span>shigeten</span>
        </section>
        <section>
          <i class="iconfont icon-QQ"></i>
          QQ号：
          <span>551608331</span>
        </section>
      </div>
  </div>
</template>

<script>
import Minehead from "./minehead.vue";
export default {
    components:{
      "c-minehead":Minehead
    }
}
</script>

<style>

</style>

