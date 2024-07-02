class NewController {
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("DONEEEE");
  }
}

module.exports = new NewController();
