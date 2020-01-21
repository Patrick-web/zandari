const mongoose = require('mongoose');

const DocSchema = new mongoose.Schema({
    docCategory:{
        type: String
    },
    docUploads: {
        type: Array
    }
})

const documentation = mongoose.model('documentation',  DocSchema);

module.exports = documentation;