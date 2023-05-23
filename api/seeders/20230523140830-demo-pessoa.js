"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "John Doe",
          ativo: true,
          email: "joe@gamil.com",
          role: "professor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Ana julia",
          ativo: true,
          email: "ana@gamil.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Isaias",
          ativo: true,
          email: "isaias@gamil.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pessoas", null, {});
  },
};
