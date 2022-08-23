const { models, sequelize } = require('../../config/database/index');

exports.getUser_login = async (username, password) => {
    var data = await models.log_in.findOne({
        where: {
            UserName: username,
            Pass: password,
        },

        raw: true,
    });

    return data;
};

exports.getUser_by_username = async (username) => {
    var data = await models.log_in.findOne({
        where: {
            UserName: username,
        },

        raw: true,
    });

    return data;
};