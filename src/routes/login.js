const express = require("express");
const route = express.Router();
const loginController = require("../app/controllers/LoginController");

route.post("/submit_user", loginController.login);
route.get("/", loginController.index);
module.exports = route;
