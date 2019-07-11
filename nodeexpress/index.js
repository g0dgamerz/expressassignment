const express = require('express');
const app = express();
const port =3000;


// app.get('/',(req,res) =>{

//     res.send('the server is on and you are on home page');
// })
app.set('view engine','ejs');
// app.get('/',(req,res)=> {
//     console.log(`server ${req.url}`);
//     res.sendFile(__dirname + '/home.html')
// })
app.get('/',(req,res)=>{
    obj={
        name:"jidesh",
        age:22,
        hobbies:['art','code','dance']
    }
    console.log(`server ${req.url}`);
    res.render('home',obj);
})
app.get('/contact/:name', (req,res)=>{
    console.log(`served ${req.url}`);
    // res.sendFile(__dirname + '/contact.html')
    res.send(`this is the profile of the ${req.params.name}`);
})
app.get('/about', (req,res)=>{
    console.log(`served ${req.url}`);
    res.sendFile(__dirname + '/about.html')
})


app.listen(port, ()=>console.log('server is up and running'));