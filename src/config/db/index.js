const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://susu0208:duy983868@cluster0.r4nm2hl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Kết nối cơ sở dữ liệu thành công!");
  } catch (error) {
    console.log(`Lỗi:` + error);
  }
}
module.exports = { connect };
