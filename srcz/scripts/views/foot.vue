<template>
  <section class="section">
    <div class="foot">
        <div class="footbox">
            <div v-for="(f,i) in footView" :key="i">
                <router-link :to="{name:f.name}">
                  <i class="iconfont" v-html="f.icon" @click="changetitl(f.titl);novelcontent(urllist[0].novelcontent);diagramcontent(urllist[1].diagramcontent)"></i>
                </router-link>
            </div>
        </div>
    </div>
  </section>
</template>
<script>
import {mapState,mapActions} from "vuex";
import Vue from "vue";
let Bus = new Vue;
export default {
  computed:{
    ...mapState([
      "footView",
      "urllist"
    ])
  },
  methods:{
    ...mapActions([
      "changetitl",
      "novelcontent",
      "diagramcontent"
    ])
  }
}
</script>

<style scoped lang="less">
.foot{
      .footbox{
        div{
          a{
            display:inline-block;
            display: flex;
            align-items: center;
            width:100%;
            height:132px;
            color:#BBC0BC;
          }
          .router-link-active{
            color:#D34958;
          }
          .ft-active-1{
            color:#D34958;
          }
        }
      }
}
</style>
