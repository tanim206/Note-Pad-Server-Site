const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");

const dataBaseConnect = async (option = {}) => {
  try {
    await mongoose.connect(mongodbURL, option);
    console.log("DataBase Connect Successfull");
    mongoose.connection.on("error", () => {
      console.log("error", " Database Connection Error", error.toString());
    });
  } catch (error) {
    console.log("Database Connection Failed", error.toString());
  }
};

module.exports = dataBaseConnect;
