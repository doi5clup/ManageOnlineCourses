const hocVien_courses = require('../services/hocVien_courses');
const listCourses = require('../services/listCourses');
const taikhoan = require('../services/taiKhoan');
const { models, sequelize } = require('../../config/database/index');

class StudentController {
    // [GET] /student
    async index(req, res, next) {
        const khoahoc_opening = await hocVien_courses.getCourses_state('Chưa hoàn thành', req.session.maSo);
        const khoahoc_opensoon = await hocVien_courses.getCourses_state('Đã hoàn thành', req.session.maSo);

        var len_khoahoc_opening = false;
        var len_khoahoc_opensoon = false;
        if (khoahoc_opening.length > 3)
            len_khoahoc_opening = true;
            
        if (khoahoc_opensoon.length > 3)
            len_khoahoc_opensoon = true;

        res.render('student', { khoahoc_opening, khoahoc_opensoon, session: req.session, len_khoahoc_opening, len_khoahoc_opensoon });
    }

    // [GET] /student/course/:slug
    async show_course(req, res, next) {
        const course = await listCourses.getCourse(req.params.slug);
        res.render('course_of_student',  { course, session: req.session });
    }

    // [GET] /student/add_money
    add_money(req, res) {
        res.render('add_money',  { session: req.session });
    }

    // [POST] /student/add_money
    async add_money_to_database(req, res) {
        const tai_khoan = await taikhoan.getTaiKhoan(req.session.maTK);

        const new_soDu = tai_khoan.SoDu - (- req.body.TienThem);
        const maTK = req.session.maTK;

        const updateTaiKhoan = (new_soDu, maTK) => {
            const sql = `
                UPDATE taikhoan
                SET SoDu = ${new_soDu}
                WHERE MaTK = ${maTK};
            `
            return sequelize.query(sql, {
              type: sequelize.QueryTypes.UPDATE
            })
        }

        updateTaiKhoan(new_soDu, maTK);

        res.redirect('/home')
    }

}

module.exports = new StudentController();
