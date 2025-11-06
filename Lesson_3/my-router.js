import express from "express";

export const router = express.Router();
// визначимо домашній роутер
router.get("/", (req, res) => {
  res.send("Це головний роутер");
});
// визначимо роутер about
router.get("/about", (req, res) => {
  res.send("About");
});
