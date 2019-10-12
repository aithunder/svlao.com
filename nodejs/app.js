// import libraries & modules:
const express = require("express");
const config = require("./utils/config");
const ethereum = require("./routes/ethereum");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");
const multer = require("multer");

// define student avatar upload location:
var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');  // where image save on server nodejs
  },
  filename: (req, file, callback) => {
    // name of image when uploaded on server
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({ storage: storage });

// enable server listening:
const app = express();
app.use('/', express.static(path.join(__dirname, 'public'))); // define public website path:
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // define public website path:
app.use(cors());
app.use(bodyParser.json());
app.use("/ethereum", ethereum);

// api save student avatar:
app.post('/upload/student', upload.single('image'), (req, res) => {
  res.status(200).json({ message: 'upload successed' });
  console.log('New student avatar uploaded');
});

// make server listening on a species port:
app.listen(config.PORT, function () {
  console.log("Server listening on *:" + config.PORT);
});