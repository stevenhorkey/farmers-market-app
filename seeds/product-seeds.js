

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Products', [{
            item: 'Bananas by the eaches',
            price: '$.59',
            image: 'bananas.jpg'
        }, {
            item: 'carrot',
            price: '1 shilling',
            image: 'carrot.jpg'
        }
        ]);

    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Products', null, {});
    }
};