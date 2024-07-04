const User = require("../models/User");
const session = require("express-session");
const flash = require("connect-flash");

class LoginController {
  index(req, res) {
    res.render("login");
  }

  login(req, res) {
    User.findOne({
      user_name: req.body.user_name,
      password: req.body.password,
    })
      .then((user) => {
        if (user) {
          req.session.user = user;
          req.flash("success", "Đăng nhập thành công!");
          res.status(200);
          res.redirect("/login");
        } else {
          req.flash("error", "Đăng nhập thất bại");
          res.status(400).json({ error: "LỖI" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }
}

module.exports = new LoginController();
