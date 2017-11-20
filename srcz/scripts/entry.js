
import router  from "./router";

import Vue from "vue";
import vueResource from "vue-resource"
Vue.use(vueResource);

import Vuex from "vuex";
Vue.use(Vuex);  // 全局使用

import store from "./vuex/store";

import MintUI from "mint-ui";
import 'mint-ui/lib/style.css';

import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper);

Vue.use(MintUI);

const app = new Vue({
    el:"#app",
    data:{
        transitionName:"slide-right"
    },
    router,
    store ,
    watch:{
        "$route":function(to,from){
            var toLength = to.path.split("/").length;
            var fromLength = from.path.split("/").length;
            this.transitionName = toLength>fromLength?"slide-left":"slide-right";
        }
    }
})