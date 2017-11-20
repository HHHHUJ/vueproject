Vue.js 的核心是一个允许采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统"

"babel-cli": "^6.26.0",
"babel-core": "^6.26.0", //cli core 是把es6代码转es5
"babel-loader": "^7.1.2", // 模块打包加载器

"babel-preset-es2015": "^6.24.1",
"babel-preset-react": "^6.24.1", //方便导入
"babel-preset-stage-0": "^6.24.1",//预设es6环境

http://api.shigeten.net/api/Critic/GetCriticList
http://api.shigeten.net/api/Critic/GetCriticContent?id=100428

http://api.shigeten.net/api/Novel/GetNovelList
http://api.shigeten.net/api/Novel/GetNovelContent?id=100440

http://api.shigeten.net/api/Diagram/GetDiagramList

http://api.shigeten.net/images/B6F9CAAC0B58313D0ACA8D2B5DCFDDF0.png



http://api.shigeten.net/images/E299836B185FBDEB22AC7FE5758113C7.png
http://api.shigeten.net/images/4E4A43C4828D10200F4F31AA3C6B7515.png
http://api.shigeten.net/images/1B04C2970AC60ADE0026DE734CC3BFE3.png
http://api.shigeten.net/images/D31EA736E2D81F54F950A6A6D0D5C935.png
http://api.shigeten.net/images/8D6B545ACED4A518E5B292D48C5A6CEC.png



 // $.ajax({
            //   url,
            //   type:"get",
            //   dataType:'jsonp',
            //   success(data){
            //     console.log(data)
            //     _this.GetCriticContent = data;
            //   },
            //   error(err){
            //     console.log(456)
            //   }
            // })
            // $.jsonp(url,{
            //    jsonp:"callback"
            // }).then(res=>{
            //   console.log(res);
            // })
            // _this.$http.jsonp(url,{
            //     jsonp:"callback"
            // })
            //   .then(res=>{
            //     console.log(res);
            //   })

