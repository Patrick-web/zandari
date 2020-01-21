const mongoose = require('mongoose');


const Course= new mongoose.Schema({
    subName: {
        type: String,
        required: true
    },
    logoUrl:{
        type:String,
        required: true
    },
    uploads:[
        {
            channel:{
                type:String,
                required: true
            },
            iframe_or_Link:{
                type:String,
                required: true
                
            }
        }
    ]
});

const course = mongoose.model('Course',  Course);

module.exports = course;