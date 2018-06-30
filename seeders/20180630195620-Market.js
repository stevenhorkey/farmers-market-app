'use strict';



module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Markets', [{
      marketName: 'St. Philips Plaza',
      marketAddress: 'St. Philips Plaza',
      marketZip: '85710',
      marketTime: 'Sundays from 8:00AM-12:00PM',
      marketImage: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      marketName: 'Thyme Market',
      marketAddress: 'Unversity Blvd',
      marketZip: '85710',
      marketTime: 'Saturdays from 8:00AM-2:00PM',
      marketImage: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Markets', null, {});
  }
};