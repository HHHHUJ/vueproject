
export default {
   footView:[
        {name:"movie",icon:"&#xe6f9;",titl:"影评"},
        {name:"article",icon:"&#xe64c;",titl:"美文"},
        {name:"picture",icon:"&#xe614;",titl:"美图"},
        {name:"mine",icon:"&#xe611;"}
    ],
    txt2:"这是文章列表",
    txt3:"这是图片列表",
    GetCriticContent:{},
    mineData:[
        {title:"我的收藏",icon:"&#xe622;",name:"collect"},
        {title:"字体设置",icon:"&#xe600;",name:"setfont"},
        {title:"关于十个",icon:"&#xe60f;",name:"about"},
        {title:"意见反馈",icon:"&#xe6b2;",name:"suggestion"}
    ],
    headTitle:"影评",
    time:{
        month:"",
        date:"",
        day:""
    },
    notNextTick:true,
    swiperOption:{
        loop:false,
        autoplay: false,
        direction:"horizontal",
        onSlideChangeStart(){

        }
    },
    novelcontent:[],
    diagramcontent:[],
    urllist:[
        {novelcontent:"http://localhost:7000/novelcontent"},
        {diagramcontent:"http://localhost:7000/diagramcontent"}
    ],
    setfontlist:[
        {txt:"眼神儿好",icon:"&#xe615;"},
        {txt:"不大不小",icon:"&#xe615;"},
        {txt:"我要大大",icon:"&#xe615;"}
    ],
    setfontidx:0,
    aboutcontent:{
        content:"每晚十点更新</br>一篇影评&nbsp;一篇文章</br>每晚入睡前用上十分钟读到最美内容</br></br>影评独特而温馨&nbsp;文章兼顾见识与审美</br>也许很长也许很短&nbsp;但必定值得耐心阅读"
    },
    value:false,
    status:"",
    username:"",
    password:"",
    loginurl:"http://localhost:7000/login",
    registerurl:"http://localhost:7000/register"
}

