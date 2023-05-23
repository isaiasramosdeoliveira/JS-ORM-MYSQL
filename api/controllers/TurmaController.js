const database = require("../models");

class TurmaController {
  static async getAllPeople(req, res) {
    try {
      const response = await database.Turmas.findAll();
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async getPerson(req, res) {
    try {
      const { id } = req.params;
      const response = await database.Turmas.findOne({
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
      const response = await database.Turmas.create(dice);
      return res.status(200).json({
        message: "Turma adicionada com sucesso.",
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
      const response = await database.Turmas.update(dice, {
        where: { id: Number(id) },
      });
      return res.status(200).json({
        message: "Turma atualizada com sucesso.",
      });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async deletePerson(req, res) {
    try {
      const { id } = req.params;
      const response = database.Turmas.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({
        message: "Turma deletada com sucesso.",
      });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = TurmaController;
