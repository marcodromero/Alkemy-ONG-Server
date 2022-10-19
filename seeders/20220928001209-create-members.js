'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Members', [{
      "name": "Amaranta Buendía",
      "image": "https://www.euroresidentes.com/suenos/img_suenos/mujer-suenos-euroresidentes.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Daniela Pranzetti",
      "image": "https://fotografias.antena3.com/clipping/cmsimages01/2021/07/01/4D81E7D2-D217-4EA8-9846-EC9DEDCA86E5/57.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Armando Casas",
      "image": "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Camilo Torres",
      "image": "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2022/05/03/62707abe7c4a7.jpeg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Aureliano Buendía",
      "image": "https://manmedicalinstitute.com/wp-content/uploads/2021/06/lucir-canas-hombre.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "David Carvajal",
      "image": "https://babumagazine.com/wp-content/uploads/2017/02/george-clooney-canas-800x600.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Luis Cano",
      "image": "https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Lizeth Reyes",
      "image": "https://cdn1.matadornetwork.com/blogs/2/2019/03/frases-sobre-mujeres-shutterstock_400610314-560x420.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Luisa Castro",
      "image": "https://static2.mujerhoy.com/www/multimedia/201706/14/media/cortadas/por-que-algunas-mujeres-tardan-en-llegar-al-orgasmo-kiLE-U301072963448EjF-624x469@MujerHoy.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Fernanda del Carpio",
      "image": "https://cientificasinnovadoras.fecyt.es/sites/default/files/cientificas/Foto%20Elisabetta%20Aurino_cuadrada.jpg",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      "name": "Camila Durán",
      "image": "https://static.dw.com/image/57482198_401.jpg",
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
