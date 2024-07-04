const express = require("express");
const route = express.Router();
const signupController = require("../app/controllers/SignupController");

// newsController.index;

route.post("/submit_user", signupController.signup);
route.get("/", signupController.index);
module.exports = route;
