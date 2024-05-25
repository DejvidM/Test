const mongoose = require('mongoose');

const BirdSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true , 'Name is required']
    },
    species : {
        type : String,
        required : [true , 'Species is required']
    },
    family : {
        type : String,
        required : [true , 'Family is required']
    },
    habitat : {
        type : String,
        required : [true , 'Habitat is required']
    },
    place_of_found : {
        type : String,
        required : [true , 'Found place is required']
    },
    diet : {
        type : String,
        required : [true , 'Diet is required']
    },
    description : {
        type : String,
        required : [true , 'Description is required']
    },
    weight_kg : {
        type : Number,
        required : [true , 'Weight is required']
    }, 
    height_cm : {
        type : Number,
        required : [true , 'Height is required']
    }, 
    image : {
        type : String,
        required : [true , 'Image is required']
    }
} ,
{timestamps : true});
const Bird = mongoose.model('Bird ' , BirdSchema);

module.exports = Bird;