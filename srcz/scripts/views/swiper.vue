<template>
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="swiper">
        <swiper-slide class="slide" v-for="(c,i) in criticlist" :key="i">
            <p>{{c.title}}</p>
        </swiper-slide>
    </swiper>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
    computed:{
        ...mapState([
            "swiperOption",
            "notNextTick",
            "criticlist"
        ])
    }
}
</script>

<style>

</style>
