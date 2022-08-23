const login = require('../services/login');
const giaovien = require('../services/giaoVien');
const hocvien = require('../services/hocVien');

class LoginController {
    // [GET] /
    index(req, res) {
        res.render('login');
    }

    async show(req, res) {
        const user_login = await login.getUser_login(req.body.username, req.body.password);

        if (!user_login) {
            res.render('login', { error: true });
        }
        else {
            var user;
            
            if (user_login.LoaiNguoiDung === 'GiaoVien') {
                user = await giaovien.getTeacher(user_login.ID_LogIn);
                req.session.maSo = user.MaGV;
                req.session.isTeacher = true;
                req.session.isStudent = false;
            }
            else {
                user = await hocvien.getStudent(user_login.ID_LogIn);
                req.session.maSo = user.MaHV;
                req.session.isStudent = true;
                req.session.isTeacher = false;
            }

            req.session.isLogin = true;
            req.session.name = user.HoTen;
            
            res.redirect('/home');
        }
    }
}

module.exports = new LoginController();
