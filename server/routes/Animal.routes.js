const AnimalController = require('../controllers/Animal.controller')
const CreateController = require('../controllers/Create.controller')
const UpdateController = require('../controllers/Update.controller')
const OurAnimalController = require('../controllers/OurAnimal.controller')

module.exports = (app) => {
    app.get('/api/dogs' , AnimalController.GetAllDogos);
    app.get('/api/cats' , AnimalController.GetAllCats);
    app.get('/api/birds' , AnimalController.GetAllBirds);
    app.get('/api/dog/:id' , AnimalController.GetOneDog);
    app.get('/api/cat/:id' , AnimalController.GetOneCat);
    app.get('/api/bird/:id' , AnimalController.GetOneBird);    

    app.post('/api/create/dog' , CreateController.CreateDog);
    app.post('/api/create/cat' , CreateController.CreateCat);
    app.post('/api/create/bird' , CreateController.CreateBird);

    app.patch('/api/update/dog/:_id' , UpdateController.UpdateDog);
    app.patch('/api/update/cat/:_id' , UpdateController.UpdateCat);
    app.patch('/api/update/bird/:_id' , UpdateController.UpdateBird);

    app.delete('/api/delete/dog/:id' , UpdateController.DeleteDog);
    app.delete('/api/delete/cat/:id' , UpdateController.DeleteCat);
    app.delete('/api/delete/bird/:id' , UpdateController.DeleteBird);

    app.get('/api/createdAnimals' , OurAnimalController.getAll);
    app.get(`/api/getdogbyid/:_id` , OurAnimalController.getDogById)
    app.get(`/api/getcatbyid/:_id` , OurAnimalController.getCatById)
    app.get(`/api/getbirdbyid/:_id` , OurAnimalController.getBirdById)
}