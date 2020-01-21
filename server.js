const mongoose = require('mongoose')
const express = require('express');


const Category = require('./models/category.model')
const Zstore = require('./models/zstore.model')
const Course = require('./models/course.model')
const Documentation = require('./models/documentation.model')
const Framework = require('./models/framework.model')

mongoose.connect("mongodb://localhost:27017/zandariBro",{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log("Connection to zandariBro db successful");
    }else{
         console.log("Error in connecion");
    }
});

const app = express();

app.get('/api/categories',(req,res)=>{
    
    Category.find({})
    .then((categories)=>{

        res.json(categories)
    })

})
app.get('/api/subCategories/:request',(req,res)=>{
    
    Category.findOne({name:req.params.request})
    .then((category)=>{

        res.json(category)
    })

})
app.get('/api/frameworks',(req,res)=>{
    
    Framework.find({})
    .then((frameworks)=>{

        res.json(frameworks)
    })

})
app.get('/api/frameworks/:area',(req,res)=>{
    
    Framework.findOne({area:req.params.area})
    .then((framework)=>{

        res.json(framework)
    })

})
app.get('/api/courses/:request',(req,res)=>{
    
    Course.findOne({subName:req.params.request})
    .then((course)=>{

        res.json(course)
    })

})

app.get('/api/getDoc/:request',(req,res)=>{
    Documentation.findOne({area:req.params.request})
    .then((doc)=>{
        res.json(doc);
    })
})
app.get('/api/zstore',(req,res)=>{
    Zstore.find({})
    .then((zstoreCategories)=>{
        res.json(zstoreCategories);
    })
})
app.get('/api/zstore/:request',(req,res)=>{
    Zstore.findOne({category:req.params.request})
    .then((category)=>{
        // console.log(category);
        // console.log(req.params.request);
        res.json(category);
    })
})

app.get('/api/zdocs',(req,res)=>{
    Documentation.find({})
    .then((doc)=>{
        res.json(doc);
    })
})

app.listen(5000, ()=>{
    console.log("zandari running on port 5000");
})
