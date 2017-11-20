<template>
  <div class="setfont">
      <c-minehead></c-minehead>
      <p class="txt">我已经老了，在人来人往的大厅，有</br
      >一位老人他向我走来，他说我认识</br>
      你，那时的你还很年轻，美丽，你的</br>
      身边有许许多多的追求者，不过跟那</br>
      时相比，我更喜欢现在你这</br>
      经历了沧桑的容颜？</p>
      <p class="booktitle">——《情人》</p>
      <div class="setfontsize">
        <section v-for="(s,i) in setfontlist" :key="i" @click="changeactive(i)" :class="setfontidx==i?'active':''">
            <i class="iconfont" v-html="s.icon"></i>
            <span>{{s.txt}}</span>
        </section>
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Minehead from "./minehead.vue";
export default {
  data(){
    return {
      setfontidx:0
    }
  },
    components:{
      "c-minehead":Minehead
    },
    computed:{
      ...mapState([
        "setfontlist"
      ])
    },
    methods:{
      changeactive(idx){
        this.setfontidx = idx;
      }
    }
}
</script>

<style>

</style>
