const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const signupRouter = require("./signup");
const loginRouter = require("./login");

function route(app) {
  app.use("/login", loginRouter);
  app.use("/signup", signupRouter);
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}
module.exports = route;
