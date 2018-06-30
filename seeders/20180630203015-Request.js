'use strict';



module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Request', [{
      UserId: "1",
      hasAccepted: true
    }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Request', null, {});
  }
};