const Dog = require('../models/Dog.model')
const Cat = require('../models/Cat.model');
const Bird = require('../models/Bird.model');

module.exports.UpdateDog =async (req ,res) => {
    Dog.updateOne({_id : req.params._id } , req.body , {new: true,runValidators : true})
        .then( updatedDog => res.json(updatedDog))
        .catch(err => res.status(400).json(err))
}

module.exports.UpdateCat = (req ,res) => {
    Cat.updateOne({_id : req.params._id } , req.body ,{new: true,runValidators : true})
        .then( updatedCat => res.json(updatedCat))
        .catch(err => res.status(400).json(err))
}

module.exports.UpdateBird = (req ,res) => {
    Bird.updateOne({_id : req.params._id } , req.body ,{new: true,runValidators : true})
        .then( updatedBird => res.json(updatedBird))
        .catch(err => res.status(400).json(err))
}

module.exports.DeleteDog = (req , res) => {
    Dog.deleteOne({_id : req.params.id})
        .then( deleted => res.json(deleted))
        .catch(err => res.json(err))
}
module.exports.DeleteCat = (req , res) => {
    Cat.deleteOne({_id : req.params.id})
        .then( deleted => res.json(deleted))
        .catch(err => res.json(err))
}
module.exports.DeleteBird = (req , res) => {
    Bird.deleteOne({_id : req.params.id})
        .then( deleted => res.json(deleted))
        .catch(err => res.json(err))
}