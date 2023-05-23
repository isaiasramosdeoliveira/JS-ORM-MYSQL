const express = require("express");
const NivelController = require("../controllers/NivelController");

const router = express.Router();
router
  .get("/niveis", NivelController.getAllPeople)
  .get("/niveis/:id", NivelController.getPerson)
  .post("/niveis", NivelController.addPerson)
  .put("/niveis/:id", NivelController.updatePerson)
  .delete("/niveis/:id", NivelController.deletePerson);

module.exports = router;
