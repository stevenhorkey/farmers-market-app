



module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Markets', [{
            marketName: 'St. Philips Plaza',
            marketLocation: 'St. Philips Plaza',
            marketTime: 'Sundays from 8:00AM-12:00PM',
            marketImage: null
        }, {
            marketName: 'Thyme Market',
            marketLocation: 'Unversity Blvd',
            marketTime: 'Saturdays from 8:00AM-2:00PM',
            marketImage: null
        }
        ]);

    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Markets', null, {});
    }
};