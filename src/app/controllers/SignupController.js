const User = require("../models/User");
const flash = require("connect-flash");

class SignupController {
  index(req, res) {
    res.render("signup");
  }

  signup(req, res) {
    User.create({
      user_name: req.body.user_name,
      password: req.body.password,
    })
      .then((user) => {
        req.flash("success", "Đăng ký thành công!");
        res.redirect("/signup");
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  }
}

module.exports = new SignupController();
