const express = require('express');
const route = express.Router();
const services = require('../services/services');
const controller = require('../controller/controller');

route.get("/", services.homeroutes);
  
  route.get("/add_user", services.add_user);

  route.get("/update_user",services.updateuser);


//Crud Operation Routes
  route.post("/api/users" , controller.create);
  route.get("/api/users" , controller.find);
  route.put("/api/users/:id" , controller.update);
  route.delete("/api/users/:id" , controller.delete);

     module.exports = route;