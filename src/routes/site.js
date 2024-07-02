const express = require("express");
const route = express.Router();
const siteController = require("../app/controllers/SiteController");

// newsController.index;

route.use("/search", siteController.search);
route.use("/", siteController.home);
module.exports = route;
