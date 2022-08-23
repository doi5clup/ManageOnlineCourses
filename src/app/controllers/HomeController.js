const listCourses = require('../services/listCourses');

class HomeController {
    // [GET] /
    async index(req, res, next) {
        const khoahoc_opening = await listCourses.getCourses_state('Đang mở');
        const khoahoc_opensoon = await listCourses.getCourses_state('Sắp mở');

        req.session.isLogin = false;
        req.session.userLogin = null;

        res.render('home', { khoahoc_opening, khoahoc_opensoon, session: req.session });
    }

    // [Get] /home
    async home(req, res, next) {
        const khoahoc_opening = await listCourses.getCourses_state('Đang mở');
        const khoahoc_opensoon = await listCourses.getCourses_state('Sắp mở');

        res.render('home', { khoahoc_opening, khoahoc_opensoon, session: req.session });
    }

    // [POST] /home
    async search(req, res, next) {
        const keySearch = req.body.keySearch;

        const courses_find = await listCourses.findCourses_by_key(keySearch);

        res.render('search', { keySearch, courses_find, len_course: courses_find.length});
    }
}

module.exports = new HomeController();
