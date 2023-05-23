const express = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = express.Router();
router
    .get("/pessoas", PessoaController.getAllPeople);


module.exports = router;