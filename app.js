const express = require('express')
const ejsLayouts = require('express-ejs-layouts') 

const app = express()

const port = 3000 || 3001


app.use(express.static('public'))
app.set('view engine','ejs')
app.use(ejsLayouts)



app.get('/api/',(req,res)=>{

    res.render('index',{ layout: 'layouts/userLayout' })
})

app.listen(port,()=>{
    console.log(`port connected on ${port}`)
})
 

