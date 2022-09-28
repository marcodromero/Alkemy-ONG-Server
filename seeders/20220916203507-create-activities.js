'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Activities', [{
      name: 'Impulsar proyectos de transformación',
      image: "https://i.picsum.photos/id/420/300/300.jpg?hmac=8SS52dAMD_0B1ZLyZQUMzSIbhTuqno6W7diGjLDMKX8",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient est, massa nam ad urna auctor facilisi lacinia proin",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Promover la participación de las personas',
      image: "https://i.picsum.photos/id/1047/300/300.jpg?hmac=xrUlyziQ2wBqlNLdxzjG4zPxbDkRugZzm2v4M-PCuzo",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient est, massa nam ad urna auctor facilisi lacinia proin",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Complementar las políticas de la organización',
      image: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient est, massa nam ad urna auctor facilisi lacinia proin",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Sensibilizar a la sociedad sobre causas sociales',
      image: "https://i.picsum.photos/id/503/300/300.jpg?hmac=yJZq1vESNpMjjHRh4fFo7Mvsc2ATwu3Pi1I8FhyUPCc",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient est, massa nam ad urna auctor facilisi lacinia proin",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Fortalecer a la ciudadanía para que sea conocedora de sus derechos',
      image: "https://i.picsum.photos/id/96/300/300.jpg?hmac=El5Y-JrwVDoOqzkfDHD1AEZvyGBjFSdFei7hDzhnaEE",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit parturient est, massa nam ad urna auctor facilisi lacinia proin",
      createdAt: new Date,
      updatedAt: new Date
    }
    ], {});

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
