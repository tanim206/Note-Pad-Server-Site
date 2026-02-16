const multer = require("multer");

const storage = multer.memoryStorage(); // image RAM এ রাখে, disk এ না

const uploadNoteImage = multer({ storage });

module.exports = uploadNoteImage;
