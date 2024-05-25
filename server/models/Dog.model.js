const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true , 'Name is required']
    },
    breed_group : {
        type : String,
        required : [true , 'Breed group is required']
    },
    size : {
        type : String,
        required : [true , 'Size is required']
    },
    lifespan : {
        type : String,
        required : [true , 'Lifespan is required']
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
const Dog = mongoose.model('Dog ' , DogSchema);

module.exports = Dog;