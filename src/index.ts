import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Simple Typescript Api Version 1.0.0");
});

app.listen(3000, () => {
  console.log("App running on port 3000 for now");
});
