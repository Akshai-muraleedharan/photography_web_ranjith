const express = require('express')
const ejsLayouts = require('express-ejs-layouts') 
const path = require('path')
const app = express()

const port = 3000 || 3001


app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(ejsLayouts)
 
const pricePlans = [
    {
        _id:1,
        plan:"Basic",
        amount:"64,999",
        single_session:"49,999",
        features:[
            "Traditional Photography",
            "Traditional Videography",
            "Premium Album (36 x 12) 50 pages",
            "Tradtional Video HD output",
            "E-invitation image",
            "Pen drive 32GB"
        ]

    },

    {
        _id:2,
        plan:"Premium",
        amount:"1,59,999",
        single_session:"1,20,999",
        features:[
            "Traditional Photography",
            "Traditional Videography",
            "Candid Photography",
            "Candid Videography",
            "Drone / Helicam",
            "Traditional video HD ouput",
            "Two premium albums (36 x 12) 50 pages",
            "Photo frame 3 Nos (12 x 18)",
            "Mini album 40 pages",   
            "E-invitation image",
            "Pen drive 64GB",
            "Candid teaser & highlights",
        ]

    },
    {
        _id:3, 
        plan:"Standard",
        amount:"85,999",
        single_session:"69,999",
        features:[
            "Traditional Photography",
            "Traditional Videography",
            "Candid Photography",
            "Candid Videography",
            "Drone / Helicam",
            "Traditional video HD ouput",
            " premium albums (36 x 12) 60 pages",
            "Photo frame 3 Nos (12 x 18)",
            "Mini album 40 pages",
            "Tradtional Video HD output",
            "E-invitation image",
            "Pen drive 32GB",
            
        ]

    }
] 

app.get('/',(req,res)=>{
   

    res.render('index',{ layout: 'layouts/userLayout' ,price:pricePlans})
})

app.listen(port,()=>{
    console.log(`port connected on ${port}`)
})
 

