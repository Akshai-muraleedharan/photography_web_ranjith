const express = require('express')
const ejsLayouts = require('express-ejs-layouts') 
const path = require('path')
const app = express()

const port = 3000 || 3001


app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(ejsLayouts)
 


app.get('/',(req,res)=>{

    res.render('index',{ layout: 'layouts/userLayout' })
})

app.listen(port,()=>{
    console.log(`port connected on ${port}`)
})
 

