const express = require("express");
const pessoasRouter = require("./pessoasRouter");
const turmasRouter = require("./turmasRouter");
const niveisRouter = require("./niveisRouter");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send({ message: "Page main" });
  });
  app.use(express.json(), pessoasRouter, turmasRouter, niveisRouter);
};
