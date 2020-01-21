const mongoose = require('mongoose')

const Category = new mongoose.Schema({
    name:{
        type:String,
        required: true

    },
    subcategory:[
        {
            subName:{
                type:String,
                required: true
            },
            logoUrl:{
                type:String,
                required: true               
            },
            description:{
                type:String,
                required: true

            }
        }
    ]
})

const category = mongoose.model('Category', Category)

module.exports  = category
