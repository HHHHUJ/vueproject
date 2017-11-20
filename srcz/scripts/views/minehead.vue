<template>
    <section class="section">
        <div class="minehead">
            <div class="mineheadbox">
                <i class="iconfont icon-weibiaoti6-copy" @click="goback"></i>
               {{$route.params.title}}
            </div>
        </div>
    </section>
</template>

<script>
import router from "../router.js"
export default {
    methods:{
        goback(){
            router.go(-1);
        }
    }
}
</script>

<style>

</style>
