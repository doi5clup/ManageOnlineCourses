const { models, sequelize } = require('../../config/database/index');

exports.getTaiKhoan = async (maTK) => {
    var data = await models.taikhoan.findOne({
        where: {
            MaTK: maTK,
        },

        raw: true,
    });

    return data;
};