

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [{
            firstName: 'Sas',
            lastName: 'Squash',
            email: 'sassquash@data.com',
            password: pass,
            userType: 'vendor',
            profileImage: '',
            bio: 'I enjoy long walks in the woods.',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            firstName: 'Dough',
            lastName: 'Vinci',
            email: 'leonardo@data.com',
            password: pass,
            userType: 'vendor',
            profileImage: 'https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTM4NTEyMzk2/leonardo-da-vinci-40396-1-402.jpg',
            bio: 'First in carbs, last in flight.',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ]);

    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', null, {});
    }
};