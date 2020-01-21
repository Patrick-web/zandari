const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
    },
    uploads:{
        type: Array
    }
});

const course = mongoose.model('course',  CourseSchema);

module.exports = course;