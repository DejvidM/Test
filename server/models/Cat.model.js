const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true , 'Name is required']
    },
    origin : {
        type : String,
        required : [true , 'Origin is required']
    },
    temperament : {
        type : String,
        required : [true , 'Temperament is required']
    },
    colors : {
        type : String,
        required : [true , 'Colors is required']
    }, 
    description : {
        type : String,
        required : [true , 'Description is required']
    },
    image : {
        type : String,
        required : [true , 'Image is required']
    }
} ,
{timestamps : true});
const Cat = mongoose.model('Cat ' , CatSchema);

module.exports = Cat;