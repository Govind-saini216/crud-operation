const express = require ('express');
const controllers = require('../controllers/usercontroller');

const Route = express.Router();

Route.post('/create',controllers.create);
Route.get('/getall',controllers.getall);
Route.get('/getone/:id',controllers.getone);
Route.put('/update/:id',controllers.update);
Route.delete('/delete/:id',controllers.deleted)


module.exports = Route ;