const database = require("../models");

class PessoaController {
  static async getAllPeople(req, res) {
    try {
      const response = await database.Pessoas.findAll();
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async getPerson(req, res) {
    try {
      const { id } = req.params;
      const response = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async addPerson(req, res) {
    try {
      const dice = req.body;
      const response = await database.Pessoas.create(dice);
      return res.status(200).json({
        message: "Pessoa adicionada com sucesso.",
        response,
      });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async updatePerson(req, res) {
    try {
      const { id } = req.params;
      const dice = req.body;
      const response = await database.Pessoas.update(dice, {
        where: { id: Number(id) },
      });
      return res.status(200).json({
        message: "Pessoa atualizada com sucesso.",
      });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async deletePerson(req, res) {
    try {
      const { id } = req.params;
      const response = database.Pessoas.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({
        message: "Pessoa deletada com sucesso.",
      });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PessoaController;
