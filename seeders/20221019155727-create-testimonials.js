'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Testimonials', [{
      name: 'Daniel Carvajal Pardo',
      image: "https://s2.abcstatics.com/media/MM/2021/11/10/PaulRudd-k2bE--1296x900@abc.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris nunc suspendisse porttitor pretium natoque cras varius, integer fermentum netus est laoreet vehicula. Et vestibulum massa proin accumsan ultrices rutrum sapien taciti, magnis fringilla",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Antonio Vidal Pranzetti',
      image: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2022/05/03/62707abe7c4a7.jpeg",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris nunc suspendisse porttitor pretium natoque cras varius, integer fermentum netus est laoreet vehicula. Et vestibulum massa proin accumsan ultrices rutrum sapien taciti, magnis fringilla",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Camila Lia Pardo',
      image: "https://fotografias.antena3.com/clipping/cmsimages01/2021/07/01/4D81E7D2-D217-4EA8-9846-EC9DEDCA86E5/57.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris nunc suspendisse porttitor pretium natoque cras varius, integer fermentum netus est laoreet vehicula. Et vestibulum massa proin accumsan ultrices rutrum sapien taciti, magnis fringilla",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Luz Estela Carvajal',
      image: "https://cdn1.matadornetwork.com/blogs/2/2019/03/frases-sobre-mujeres-shutterstock_400610314-560x420.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris nunc suspendisse porttitor pretium natoque cras varius, integer fermentum netus est laoreet vehicula. Et vestibulum massa proin accumsan ultrices rutrum sapien taciti, magnis fringilla",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Julian David Lopez',
      image: "https://images.hola.com/imagenes/hombre/2012031157403/lento-envejecimiento-hombres/0-198-453/hombre-envejecimiento-01-a.jpg?tx=w_744",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris nunc suspendisse porttitor pretium natoque cras varius, integer fermentum netus est laoreet vehicula. Et vestibulum massa proin accumsan ultrices rutrum sapien taciti, magnis fringilla",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Ramón Castellanos Garcia',
      image: "https://www.semana.es/wp-content/uploads/2019/07/melendi.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris nunc suspendisse porttitor pretium natoque cras varius, integer fermentum netus est laoreet vehicula. Et vestibulum massa proin accumsan ultrices rutrum sapien taciti, magnis fringilla",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Luisa Camila Torres',
      image: "https://static2.mujerhoy.com/www/multimedia/201706/14/media/cortadas/por-que-algunas-mujeres-tardan-en-llegar-al-orgasmo-kiLE-U301072963448EjF-624x469@MujerHoy.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris nunc suspendisse porttitor pretium natoque cras varius, integer fermentum netus est laoreet vehicula. Et vestibulum massa proin accumsan ultrices rutrum sapien taciti, magnis fringilla",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Fernando Amador Herrera',
      image: "https://centrodermatologicoestetico.com/wp-content/uploads/2018/10/masculinizaciin-facial.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, mauris nunc suspendisse porttitor pretium natoque cras varius, integer fermentum netus est laoreet vehicula. Et vestibulum massa proin accumsan ultrices rutrum sapien taciti, magnis fringilla",
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
