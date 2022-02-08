import express from "express";

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("Simple Typescript Api Version 1.0.0");
});

const port: number = 3000 || process.env.PORT;

app.listen(3000, () => {
  console.log(`App running on port ${port}`);
});
