const { models, sequelize } = require('../../config/database/index');

exports.getStudent = async (id_login) => {
    var data = await models.hocvien.findOne({
        where: {
            ID_LogIn: id_login,
        },

        raw: true,
    });

    return data;
};

exports.getStudent_by_maHV = async (maHV) => {
    var data = await models.hocvien.findOne({
        where: {
            MaHV: maHV,
        },

        raw: true,
    });

    return data;
};