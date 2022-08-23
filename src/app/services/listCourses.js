const { models, sequelize } = require('../../config/database/index');
const { Op } = require('sequelize');

exports.getCourses_state = async (state) => {
    var data = await models.khoahoc.findAll({
        where: {
            TrangThaiHD: state,
        },

        include: [
            { model: models.giaovien, required: true, as: 'GVCN_giaovien' },
        ],
        raw: true,
    });

    for (const item of data) {
        item.HoTen = item['GVCN_giaovien.HoTen'];
        item.LinkAvatar = item['GVCN_giaovien.LinkAvatar'];
    }

    return data;
};

exports.getCourse = async (slug_2) => {
    var data = await models.khoahoc.findOne({
        where: {
            Slug: slug_2,
        },

        include: [
            { model: models.giaovien, required: true, as: 'GVCN_giaovien' },
        ],
        raw: true,
    });
        
    data.HoTen = data['GVCN_giaovien.HoTen'];
    data.LinkAvatar = data['GVCN_giaovien.LinkAvatar'];

    return data;
};

exports.getCourse_byID = async (maKH) => {
    var data = await models.khoahoc.findOne({
        where: {
            MaKH: maKH,
        },

        include: [
            { model: models.giaovien, required: true, as: 'GVCN_giaovien' },
        ],
        raw: true,
    });
        
    data.HoTen = data['GVCN_giaovien.HoTen'];
    data.LinkAvatar = data['GVCN_giaovien.LinkAvatar'];

    return data;
};

exports.getCourses_ofTeacher = async (state, gvcn) => {
    var data = await models.khoahoc.findAll({
        where: {
            TrangThaiHD: state,
            GVCN: gvcn,
        },

        include: [
            { model: models.giaovien, required: true, as: 'GVCN_giaovien' },
        ],
        raw: true,
    });

    return data;
};

exports.findCourses_by_key = async (keySearch) => {
    var data = await models.khoahoc.findAll({
        where: {
            [Op.or]: [
                {
                    TenKH: {
                        [Op.like]: '%' + keySearch + '%',
                    },
                },
                {
                    LinhVuc: {
                        [Op.like]: '%' + keySearch + '%',
                    },
                },
            ]
        },

        include: [
            { model: models.giaovien, 
                required: true, 
                as: 'GVCN_giaovien', 
            },
        ],

        raw: true,
    });

    for (const item of data) {
        item.HoTen = item['GVCN_giaovien.HoTen'];
        item.LinkAvatar = item['GVCN_giaovien.LinkAvatar'];
    }

    return data;
};
