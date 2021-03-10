'use strict';

const routes = require('express').Router();

const MaterialController = require('../controllers/materialController');
const LoginController = require('../controllers/loginController');

routes.get("/materials", MaterialController.getMaterials);
routes.post("/materials", MaterialController.postMaterial);
routes.get("/materials/:id", MaterialController.getMaterial);
routes.delete("/materials/:id", MaterialController.deleteMaterial);

routes.post("/login", LoginController.postLogin);

module.exports = routes;