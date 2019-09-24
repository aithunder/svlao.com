const express = require("express");
const config = require("./utils/config");
const ethereum = require("./routes/ethereum");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
app.listen(config.PORT, function() {
  console.log("Server đang lắng nghe tại port " + config.PORT);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use("/ethereum", ethereum);