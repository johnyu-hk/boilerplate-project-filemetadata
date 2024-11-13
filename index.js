var express = require("express");
var cors = require("cors");
require("dotenv").config();
var app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  resObj = {};
  resObj.name = req.file.originalname;
  resObj.type = req.file.mimetype;
  resObj.size = req.file.size;
  // resObj.fileName = req.
  console.log(resObj);
  res.json(resObj);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
