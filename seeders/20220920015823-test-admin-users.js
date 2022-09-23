'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    [{
      roleId: 1,
      firstName: "Adah",
      lastName: "Lownie",
      email: "alownie0@zdnet.com",
      password: "W9w6zAnacw",
      image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      createdAt: "2022-03-23T21:38:42Z",
      UpdatedAt: "2022-08-27T17:55:49Z"
    },
    {
      roleId: 1,
      firstName: "Carolus",
      lastName: "Stitwell",
      email: "cstitwell1@dropbox.com",
      password: "FCZvXpQ",
      image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      createdAt: "2022-02-06T23:26:02Z",
      UpdatedAt: "2022-09-06T17:37:11Z"
    },
    {
      roleId: 1,
      firstName: "Evania",
      lastName: "Littlejohns",
      email: "elittlejohns2@edublogs.org",
      password: "pUIpRvdkF",
      image: "http://dummyimage.com/100x100.png/dddddd/000000",
      createdAt: "2022-07-22T13:45:01Z",
      UpdatedAt: "2022-04-22T19:10:36Z"
    },
    {
      roleId: 1,
      firstName: "Damara",
      lastName: "Howler",
      email: "dhowler3@sogou.com",
      password: "g4IUxh",
      image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
      createdAt: "2022-07-01T15:33:04Z",
      UpdatedAt: "2022-08-06T06:43:53Z"
    },
    {
      roleId: 1,
      firstName: "Tibold",
      lastName: "Hutchence",
      email: "thutchence4@nih.gov",
      password: "d7lGt7WcH",
      image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      createdAt: "2021-12-05T07:32:48Z",
      UpdatedAt: "2022-07-30T04:27:06Z"
    },
    {
      roleId: 1,
      firstName: "Thia",
      lastName: "Belleny",
      email: "tbelleny5@mit.edu",
      password: "tMko0P",
      image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
      createdAt: "2022-06-21T07:50:23Z",
      UpdatedAt: "2022-07-25T12:22:47Z"
    },
    {
      roleId: 1,
      firstName: "Otho",
      lastName: "Piggens",
      email: "opiggens6@delicious.com",
      password: "XuAsCs",
      image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      createdAt: "2022-08-25T01:59:40Z",
      UpdatedAt: "2022-03-13T04:13:51Z"
    },
    {
      roleId: 1,
      firstName: "Beauregard",
      lastName: "Whiley",
      email: "bwhiley7@skype.com",
      password: "9mV11DQ8Y",
      image: "http://dummyimage.com/100x100.png/dddddd/000000",
      createdAt: "2022-06-24T23:40:08Z",
      UpdatedAt: "2022-05-20T19:18:31Z"
    },
    {
      roleId: 1,
      firstName: "Briggs",
      lastName: "Aimer",
      email: "baimer8@indiatimes.com",
      password: "1jx0Uja8BCa",
      image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
      createdAt: "2022-01-15T11:09:36Z",
      UpdatedAt: "2022-01-12T08:06:40Z"
    },
    {
      roleId: 1,
      firstName: "Jeanna",
      lastName: "Abbess",
      email: "jabbess9@seesaa.net",
      password: "IGYjkdO14Y",
      image: "http://dummyimage.com/100x100.png/dddddd/000000",
      createdAt: "2022-09-17T12:46:32Z",
      UpdatedAt: "2021-09-26T07:46:40Z"
    }]
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users'); // Can't get bulkdelete to work
  }
};
