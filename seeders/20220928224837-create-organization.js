'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Organizations', [{
      title: 'SOMOS MÁS',
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit hac, inceptos nulla imperdiet ac sodales proin turpis senectus varius, penatibus class lobortis vestibulum facilisis vehicula dictum. Turpis dapibus in a justo phasellus dictumst suscipit elementum",
      image: "https://i.picsum.photos/id/435/350/350.jpg?hmac=nvp7MK34j268wvD3es1YXXiKxe8AiiT29uoosP85iso",
      facebook: "https://zoratamagallery.sfo3.digitaloceanspaces.com/Social/Facebook.svg",
      linkedin: "https://zoratamagallery.sfo3.digitaloceanspaces.com/Social/Linkedin.svg",
      instagram: "https://zoratamagallery.sfo3.digitaloceanspaces.com/Social/Instagram.svg",
      createdAt: new Date,
      updatedAt: new Date
    }]);

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
