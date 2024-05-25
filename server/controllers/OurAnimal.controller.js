const Dog = require('../models/Dog.model')
const Cat = require('../models/Cat.model');
const Bird = require('../models/Bird.model');
const { GetOneBird } = require('./Animal.controller');

module.exports.getAll =async (req , res ) => {
    try {
        const [dogs, cats, birds] = await Promise.all([
            Dog.find({}),
            Cat.find({}),
            Bird.find({})
        ]);

        const allAnimals = [{dog : [...dogs]} , {cat : [...cats]}, {bird : [...birds]}];

        res.json(allAnimals);
    } catch (err) {
        res.status(500).json(err);
    }

}

module.exports.getDogById = (req ,res) => {
    Dog.findOne({_id : req.params._id})
        .then( dog => res.json(dog))
        .catch(err => res.json(err))
}

module.exports.getCatById = (req ,res) => {
    Cat.findOne({_id : req.params._id})
        .then( cat => res.json(cat))
        .catch(err => res.json(err))
}

module.exports.getBirdById = (req ,res) => {
    Bird.findOne({_id : req.params._id})
        .then( bird => res.json(bird))
        .catch(err => res.json(err))
}