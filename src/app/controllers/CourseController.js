const listCourses = require('../services/listCourses');
const hocvien = require('../services/hocVien');
const taikhoan = require('../services/taiKhoan');
const { models, sequelize } = require('../../config/database/index');

class CourseController {
    // [GET] /course
    index(req, res, next) {
        res.render('course');
    }

    // [Get] /course/:slug
    async show(req, res, next) {
        const course = await listCourses.getCourse(req.params.slug);
        res.render('course', { course, session: req.session});
    }

    // [Get] /course/join/:slug
    async join(req, res, next) {
        const course = await listCourses.getCourse(req.params.slug);
        const hoc_vien = await hocvien.getStudent_by_maHV(req.session.maSo);
        const tai_khoan = await taikhoan.getTaiKhoan(hoc_vien.MaTK);

        req.session.maKH = course.MaKH;
        req.session.new_soDU = tai_khoan.SoDu-course.HocPhi;
        req.session.maTK = tai_khoan.MaTK;

        if (req.session.new_soDU > 0) 
            res.render('join_course', { course, tai_khoan, soDu_after: req.session.new_soDU, session: req.session } );
        else 
            res.render('joinCourse_failed', { session: req.session } );
    }

    // [Get] /course/agree
    async edit_in_database(req, res, next) {
        var hv_tg_kh = await models.hocvien_tg_khoahoc.create({
            MaHV: req.session.maSo,
            MaKH: req.session.maKH,
            NgayTG: '2022-01-21',
            TinhTrang: 'Chưa hoàn thành',
        });

        const new_soDu = req.session.new_soDU;
        const maTK = req.session.maTK;

        const updateTaiKhoan = (new_soDu, maTK) => {
            const sql = `
                UPDATE taikhoan
                SET SoDu = '${new_soDu}'
                WHERE MaTK = ${maTK};
            `
            return sequelize.query(sql, {
              type: sequelize.QueryTypes.UPDATE
            })
        }

        updateTaiKhoan(new_soDu, maTK);

        res.redirect('/student');
    }
}

module.exports = new CourseController();
