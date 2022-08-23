const listCourses = require('../services/listCourses');
const { models, sequelize } = require('../../config/database/index');

class TeacherController {
    // [GET] /teacher
    async index(req, res, next) {
        const khoahoc_opening = await listCourses.getCourses_ofTeacher('Đang mở', req.session.maSo);
        const khoahoc_opensoon = await listCourses.getCourses_ofTeacher('Sắp mở', req.session.maSo);

        var len_khoahoc_opening = false;
        var len_khoahoc_opensoon = false;
        if (khoahoc_opening.length > 3)
            len_khoahoc_opening = true;
            
        if (khoahoc_opensoon.length > 3)
            len_khoahoc_opensoon = true;
        
        res.render('teacher', { khoahoc_opening, khoahoc_opensoon, session: req.session, len_khoahoc_opening, len_khoahoc_opensoon });
    }

    // [GET] /teacher/course/:slug
    async show_course(req, res, next) {
        const course = await listCourses.getCourse(req.params.slug);
        res.render('course_of_teacher',  { course, session: req.session });
    }

    // [Get] /teacher/create
    async show_create(req, res, next) {
        res.render('createCourse', { session: req.session } )
    }

    // [Post] /teacher/create
    async create(req, res, next) {
        if (
            req.body.TenKH == '' || 
            req.body.HocPhi == '' || 
            req.body.SLHV_Max == '' ||
            req.body.LinhVuc == '' ||
            req.body.LichHoc == '' ||
            req.body.MoTa == '' ||
            req.body.LinkImage == '' ||
            req.body.LinkVideo == ''
        ) {
            res.render('createCourse', { session: req.session, error: true } )
        }
        else {
            var khoaHoc = await models.khoahoc.create( {
                TenKH: req.body.TenKH,
                NgayTao: '2022-01-22',
                NgayBD: req.body.NgayBD,
                NgayKT: req.body.NgayKT,
                HocPhi: req.body.HocPhi,
                SLHV_Max: req.body.SLHV_Max,
                MoTa: req.body.MoTa,
                LinhVuc: req.body.LinhVuc,
                TrangThaiHD: "Sắp mở",
                LichHoc: req.body.LichHoc,
                Slug: req.body.TenKH,
                LinkImage: req.body.LinkImage,
                LinkVideo: req.body.LinkVideo,
                GVCN: req.session.maSo,
            });

            //res.json(khoaHoc);
            res.redirect('/teacher');
        }
    }
}

module.exports = new TeacherController();
