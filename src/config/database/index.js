const Sequelize = require('Sequelize');
const initModels = require('../../models/init-models');
require('dotenv').config('../.env');

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
);

module.exports = {
    sequelize,
    models: initModels(sequelize),
};
