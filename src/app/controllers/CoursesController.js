const Course = require("../models/Course");

class CoursesController {
  index(req, res) {
    Course.find({})
      .lean()
      .then((courses) => {
        res.render("courses", { courses });
      })
      .catch((error) => {
        next(error);
      });
  }

  update(req, res) {
    Course.create({
      name: req.body.name,
      des: req.body.des,
      thumb: req.body.thumb,
    })
      .then((course) => {
        res.redirect("/courses");
      })
      .catch((error) => {
        res.sendStatus(400).json({ error });
      });
  }
}

module.exports = new CoursesController();
