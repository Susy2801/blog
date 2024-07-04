const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Kết nối cơ sở dữ liệu thành công!");
  } catch (error) {
    console.log(`Lỗi:` + error);
  }
}
module.exports = { connect };
