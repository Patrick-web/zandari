const mongoose = require('mongoose');


const Framework= new mongoose.Schema({
    area: {
        type: String,
        required: true
    },
    frameworks:[
        {
            frameworkName:{
                type:String,
                required: true   
            },
            logoUrl:{
                type:String,
                required: true
            },
            uploads:[{
                channel:{
                    type:String,
                    required: true
                },
                iframe_or_Link:{
                    type:String,
                    required: true
                    
                }
            }]
        
        }
    ]
});

const framework = mongoose.model('Framework',  Framework);

module.exports = framework;