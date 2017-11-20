
var app = require('express')();
var server = require('http').createServer(app);
var conn = require('./conn')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var async = require("async")
var host = "localhost";
var port = "7000"


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//解决跨域
app.all('*',function(req,res,next){
    // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next()
});
 
app.get('/critic',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("critic");
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

app.get('/criticcontent',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("criticcontent");
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})


app.get('/novel',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("novel");
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})


app.get('/novelcontent',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("novelcontent");
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

app.get('/diagram',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("diagram");
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

app.get('/diagramcontent',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("diagramcontent");
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

app.get('/register',(req,res)=>{
    var user = req.query.username;
    var pass = req.query.password;
    var insertDb = function(db,callback){
        var info = db.collection("info");
        async.waterfall([
            function(callback){
                info.find({username:user},{_id:0}).toArray((err,result)=>{
                    if(err) throw err;
                    console.log("###############")
                    console.log(result);
                    var len = result.length;
                    if(len>0){
                        callback(null,true);//不能注册
                    }else{
                        callback(null,false)
                    }
                })
            },
            function(arg,callback){
                if(arg){
                    callback(null,0)//不能注册
                }else{
                    info.insert({username:user,password:pass},(err,result)=>{
                        if(err) throw err;
                        callback(null,1)
                    })
                }
            }
        ],function(err,result){
            callback(result)
        })
    }
    conn.getDb((err,db)=>{
        if(err) throw err;
        insertDb(db,(result)=>{
            if(result=='1'){
                res.send('1')//可以注册
            }else{
                res.send('0')
            }
        })
    })
});

app.get("/login",(req,res)=>{
    var user = req.query.username;
    var pass=  req.query.password;
    console.log("###################")
    console.log(user)
    console.log(pass)
    var findData = function(db,callback){
        var collection = db.collection("info");
        collection.find({username:user,password:pass}).toArray((err,result)=>{
          if(err) throw err;
          callback(result);
        })
      }
    conn.getDb((err,db)=>{
        if(err) throw err;
        findData(db,function(result){
            if(result.length>0){
                res.send("1")
            }else{
                res.send("0")
            }
        })   
    }) 
});

server.listen(port,host,()=>{
    console.log(`the server is running at ${host}:${port}`)
})