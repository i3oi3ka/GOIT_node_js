import express from "express";
import cors from "cors";
import { router } from "./my-router.js";

const app = express();
app.use(cors());

app.set("json spaces", 8);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/my-router", router);

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

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
  // res.json(contact)
});

app.patch("/user/:userid", (req, res) => {
  const id = req.params.userid;
  // виконуємо необхідні дії
});

app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});

app.all("/anything", (req, res, next) => {
  console.log("Anything method.");
  next(); // передаємо управління далі
});

app
  .route("/blog")
  .get((req, res) => {
    res.send("Get a list of blog");
  })
  .post((req, res) => {
    res.send("Add a record to blog");
  })
  .put((req, res) => {
    res.send("Update blog");
  });
