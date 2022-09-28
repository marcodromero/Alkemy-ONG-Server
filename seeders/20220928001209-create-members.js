'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('News', [{
      "name": "Novedad seeder",
      "content": "Lorem ipsum",
      "image": "https://i.picsum.photos/id/1070/200/200.jpg?hmac=ulNtCwg9etYpYD_RxTGBFNLAbCqxJ0cj1L0WI7Ezcr4",
      "type": "news",
      "categoryId": 1,
      createdAt: new Date,
      updatedAt: new Date
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
