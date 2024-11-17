//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgrmming
import bodyParser from "body-parser";
import express from "express";
// var path = require('path');
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.post("/check", (req, res) => {
  const pass = req.body.password;
  if (pass === "ILoveProgramming") {
    res.sendFile(path.join(__dirname + "/public/secret.html"));
  } else {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  }
});

app.listen(PORT, (req, res) => {
  console.log("server is running on port " + PORT);
});
