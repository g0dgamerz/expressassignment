express = require('express');
app = express();
var bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'))
app.set('view engine','ejs');
// app.use(express.bodyParser());
// app.use('/assets',(req,res,next) =>{

//     console.log(req.url);
//     next();
// })
app.use('/assets',express.static('assets'));
app.get('/',(req,res) => {
    console.log(`server ${req.url}`);
    res.render('index')
})
app.get('/get',(req,res)=>{
    obj=req.query;
    console.log(`server ${req.url}`);
    console.log(obj);
    res.render('output',
    obj);
})
app.post('/post',urlencodedParser,(req,res)=>{
    console.log(`server ${req.url}`);
    obj=req.body;
    console.log(obj);
    res.render('output',obj);

})
app.listen(3000,function() { console.log("Server is running")});