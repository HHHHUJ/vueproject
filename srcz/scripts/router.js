
import VueRouter from "vue-router"
Vue.use(VueRouter)  // 全局使用VueRouter

import Vue from "vue";
import Layout from "./views/layout.vue";
import Movie from "./views/movie.vue";
import Article from "./views/article.vue";
import Picture from "./views/picture.vue";
import Mine from "./views/mine.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Collect from "./views/collect.vue";
import Setfont from "./views/setfont.vue";
import About from "./views/about.vue";
import Suggestion from "./views/suggestion.vue";
var routes = [
    {
        path:"/",
        component:Layout,
        children:[
            {path:"movie",name:"movie",component:Movie},
            {path:"article",name:"article",component:Article},
            {path:"picture",name:"picture",component:Picture},
            {path:"mine",name:"mine",component:Mine},
            {path:"*",redirect:"/movie"}
        ]
    },
    {
        path:"/login",
        component:Login,
        name:"login"
    },
    {
        path:"/register",
        component:Register,
        name:"register"
    },
    {
        path:"/collect/:title",
        component:Collect,
        name:"collect"
    },
    {
        path:"/setfont/:title",
        component:Setfont,
        name:"setfont"
    },
    {
        path:"/about/:title",
        component:About,
        name:"about"
    },
    {
        path:"/suggestion/:title",
        component:Suggestion,
        name:"suggestion"
    }
]

const router = new VueRouter({
    mode:"hash",
    routes
});


export default router;