const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const studentsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: false
    },
    hobby: {
        type: String,
        required: false
    },
    score:{
        type: String,
        required: false
    }
    
});

const Students = mongoose.model("students", studentsSchema);

module.exports = Students;
