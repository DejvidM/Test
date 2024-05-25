const Dog = require('../models/Dog.model')
const Cat = require('../models/Cat.model');
const Bird = require('../models/Bird.model');

module.exports.CreateDog = (req , res) => {
    Dog.create(req.body)
        .then(dog => res.json(dog))
        .catch(err => res.status(400).json(err))
}
module.exports.CreateCat = (req , res) => {
    Cat.create(req.body)
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json(err))
}
module.exports.CreateBird = (req , res) => {
    Bird.create(req.body)
        .then(bird => res.json(bird))
        .catch(err => res.status(400).json(err))
}

