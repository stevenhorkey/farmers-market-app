'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Sas',
      lastName: 'Squash',
      email: 'bigFEET@hairyBalls.com',
      password: "password1",
      userType: 'vendor',
      profileImage: '',
      bio: 'I enjoy long walks in the woods.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Dough',
      lastName: 'Vinci',
      email: 'leonardo@data.com',
      password: "password2",
      userType: 'vendor',
      profileImage: 'https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTM4NTEyMzk2/leonardo-da-vinci-40396-1-402.jpg',
      bio: 'First in carbs, last in flight.',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
