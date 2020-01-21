const mongoose = require('mongoose');


const Documetation= new mongoose.Schema({
    docTitle:{
        type:String,
        required: true
    },
    docLink:{
        type:String,
        required: true
    }
        
    
});

const documetation = mongoose.model('Documetation',  Documetation);

module.exports = documetation;