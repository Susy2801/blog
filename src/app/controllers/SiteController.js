const session = require("express-session");
const flash = require("connect-flash");
class SiteController {
  // GET /home
  home(req, res) {
    if (req.session.user) {
      req.flash("success", "Đăng nhập thành công!");
      res.render("home");
    } else {
      res.render("home");
    }
  }

  // GET /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
