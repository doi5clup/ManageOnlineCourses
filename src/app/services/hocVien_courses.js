const { models, sequelize } = require('../../config/database/index');
const listCourses = require('../services/listCourses');

exports.getCourses_state = async (state, maHV) => {
    var data = await models.hocvien_tg_khoahoc.findAll({
        where: {
            TinhTrang: state,
            MaHV: maHV,
        },

        // include: [
        //     { model: models.khoahoc, required: true, as: 'MaKH_khoahoc_hocvien_tg_khoahocs' },
        //     { model: models.hocvien, required: true, as: 'MaKH_khoahoc_hocvien_tg_khoahocs' },
        // ],
        raw: true,
    });

    const tmp = [];
    var index = 0;
    for (const item of data) {
        tmp[index] = await listCourses.getCourse_byID(item['MaKH']);
        console.log(tmp[index]['TenKH']);
        index += 1;
    }

    return tmp;
};