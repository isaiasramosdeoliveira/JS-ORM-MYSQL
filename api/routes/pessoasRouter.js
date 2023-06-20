const express = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = express.Router();
router
	.get("/pessoas", PessoaController.getAllPeople)
	.get("/pessoas/:id", PessoaController.getPerson)
	.post("/pessoas", PessoaController.addPerson)
	.put("/pessoas/:id", PessoaController.updatePerson)
	.delete("/pessoas/:id", PessoaController.deletePerson)

	.get("/pessoas/:id/matricula/:register", PessoaController.getRegistration)
	.post("/pessoas/:id/matricula", PessoaController.addRegistration)
	.put("/pessoas/:id/matricula/:register", PessoaController.updateRegistration)
	.delete("/pessoas/:id/matricula/:register", PessoaController.deleteRegistration);

module.exports = router;