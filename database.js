
const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense', 'root', 'Swa8667414579', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;