const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express();
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
const x=0;
app.get('/',(req,res)=>{
    res.render('landing',{x:x})
})
app.post('/show',(req,res)=>{
    request('http://api.tvmaze.com/search/shows?q='+req.body.showname,(err,response,body)=>{
        if(!err && response.statusCode==200)
        {
            bodyp=JSON.parse(body);
            res.render('landing',{x:1,show:bodyp})
        }
    })
})
app.listen(3000,()=>{console.log('server is running...')})