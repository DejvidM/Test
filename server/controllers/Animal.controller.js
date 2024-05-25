const axios = require('axios');

    module.exports.GetAllDogos = async (req , res) => {
        
        await axios.get('https://freetestapi.com/api/v1/dogs')  
            .then( dogos => res.json(dogos.data))
            .catch(err => res.json(err))
        
    }

    module.exports.GetAllCats = async (req , res) => {
        
        await axios.get('https://freetestapi.com/api/v1/cats')  
            .then( cats => res.json(cats.data))
            .catch(err => res.json(err))
        
    }

    module.exports.GetAllBirds = async (req , res) => {
        
        await axios.get('https://freetestapi.com/api/v1/birds')  
            .then( birds => res.json(birds.data))
            .catch(err => res.json(err))
        
    }


    module.exports.GetOneDog = async (req , res) => {
        
        await axios.get(`https://freetestapi.com/api/v1/dogs/${req.params.id}`)  
            .then( dogo => res.json(dogo.data))
            .catch(err => res.json(err))
        
    }

    module.exports.GetOneCat = async (req , res) => {
        
        await axios.get(`https://freetestapi.com/api/v1/cats/${req.params.id}`)  
            .then( cat => res.json(cat.data))
            .catch(err => res.json(err))
        
    }

    module.exports.GetOneBird = async (req , res) => {
        
        await axios.get(`https://freetestapi.com/api/v1/birds/${req.params.id}`)  
            .then( bird => res.json(bird.data))
            .catch(err => res.json(err))
        
    }
