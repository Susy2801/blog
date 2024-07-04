const express = require("express");
const route = express.Router();
const coursesController = require("../app/controllers/CoursesController");

route.post("/update", coursesController.update);
route.get("/", coursesController.index);
module.exports = route;
