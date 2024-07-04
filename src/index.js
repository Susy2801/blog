const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
//
const route = require("./routes");
const db = require("./config/db");

// Connect db
db.connect();

// Session
app.use(
  session({
    secret: "hehehe",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Đặt thành true nếu bạn sử dụng HTTPS
  })
);

// Flash
app.use(flash());

// Middleware để có thể truy cập flash message từ template engine
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  next();
});

// app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, `public`)));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, `resource\\views`));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
