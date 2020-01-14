const express = require('express');
const VuttrController = require('./controllers/VuttrController');

const routes = express.Router();

routes.get('/tools', VuttrController.list);
routes.post('/tools', VuttrController.store);
routes.delete('/tools/:id', VuttrController.destroy);

module.exports = routes;