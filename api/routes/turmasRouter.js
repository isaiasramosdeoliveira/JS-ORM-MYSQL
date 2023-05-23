const express = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = express.Router();
router
  .get("/turmas", TurmaController.getAllPeople)
  .get("/turmas/:id", TurmaController.getPerson)
  .post("/turmas", TurmaController.addPerson)
  .put("/turmas/:id", TurmaController.updatePerson)
  .delete("/turmas/:id", TurmaController.deletePerson);

module.exports = router;
