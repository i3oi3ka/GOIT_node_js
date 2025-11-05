import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
