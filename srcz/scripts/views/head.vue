<template>
    <section class="section">
        <div class="head">
            <div class="headbox">
                <span>{{headTitle}}</span>
                <div class="time">
                    <p>{{time.date}}</p>
                    <div class="sec">
                        <strong>{{time.day}}</strong>
                        <strong>{{'/'+time.month}}</strong>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from "vuex";
import router from "../router.js"
export default {
    computed:{
        ...mapState([
           "headTitle",
           "time"
        ])
    },
    mounted(){
        var newDate = new Date();
        this.time.month =  newDate.getMonth()+1;//月
        this.time.date = newDate.getDate(); //日
        this.time.day = newDate.getDay(); //周几
        switch(this.time.day){
            case 0:
                this.time.day = 'SUN';
                return;
            case 1:
                this.time.day = 'MON';
                return;
            case 2:
                this.time.day = 'TUE';
                return;
            case 3:
                this.time.day = 'WEN';
                return;
            case 4:
                this.time.day = 'THU';
                return;
            case 5:
                this.time.day = 'FRI';
                return;
            case 6:
                this.time.day = 'SAT';
                return;
        }
    }
}
</script>

<style>

</style>
