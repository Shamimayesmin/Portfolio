const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

const data = require("./data.json");

app.use(express.json());
app.use(cors());

app.get("/details/:id", (req, res) => {
  const { id } = req.params;
  const result = data.find((pr) => pr.id == id);
  console.log(result);
  res.send(result);
});

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => console.log("server is running"));
