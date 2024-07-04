const express = require("express");
const route = express.Router();
const siteController = require("../app/controllers/SiteController");

route.use((req, res, next) => {
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  next();
});
route.get("/search", siteController.search);
route.get("/", siteController.home);
module.exports = route;
