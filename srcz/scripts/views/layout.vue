<template>
    <section class="section">
        <div class="layout">
            <router-view></router-view>
            <c-foot></c-foot>
        </div>
    </section>
</template>

<script>
import Foot from './foot.vue';
import {mapState} from "vuex";
export default {
    components:{
        "c-foot":Foot
    },
    computed:{
        ...mapState([
            
        ])
    }
}
</script>

<style>

</style>
