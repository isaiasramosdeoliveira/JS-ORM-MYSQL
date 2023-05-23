const database = require("../models");

class PessoaController{
    static async getAllPeople(req, res){
        try{
            const response = await database.Pessoas.findAll();
            return res.status(200).json(response);
        } catch(err){
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PessoaController;