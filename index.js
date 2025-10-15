const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');

app.get('/',(req , res)=>{
  res.render('index')
});

app.post('/contact',(req , res)=>{
  const {name , email, massage}= req.body

  console.log('From Data :', req.body);

  res.json({status:'success', msg:`Thank you ${name},we recevied your massage `})
  
})

app.listen(3000,()=>{console.log("server is start")})

