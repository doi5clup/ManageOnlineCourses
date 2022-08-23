const { models, sequelize } = require('../../config/database/index');
const login = require('../services/login');
const giaovien = require('../services/giaoVien');
const hocvien = require('../services/hocVien');

class RegisterController {
    // [GET] /register
    index(req, res) {
        res.render('register');
    }

    // [POST] /register
    async add_to_database(req, res, next) {
        if (
            req.body.HoTen == '' || 
            req.body.SoDienThoai == '' || 
            req.body.Email == '' ||
            req.body.DiaChi == '' ||
            req.body.UserName == '' ||
            req.body.Pass == '' ||
            req.body.RePass == '' ||
            req.body.SoTK == ''
        ) {
            res.render('register', { isEmpty: true });
        } 
        else {
            const isExists = await login.getUser_by_username(req.body.UserName);

            if (isExists) {
                res.render('register', { isExistsUsername: true });
            }
            else if (req.body.Pass != req.body.RePass) {
                res.render('register', { notEqualsPass: true });
            }
            else {

                var log_in = await models.log_in.create({
                    UserName: req.body.UserName,
                    Pass: req.body.Pass,
                    LoaiNguoiDung: req.body.LoaiNguoiDung,
                })

                var tai_khoan = await models.taikhoan.create({
                    SoTK: req.body.SoTK,
                    NganHangLK: req.body.NganHangLK,
                    SoDu: 5000000,
                })

                if (log_in.LoaiNguoiDung === 'GiaoVien') {
                    var giao_vien = await models.giaovien.create({
                        HoTen: req.body.HoTen,
                        NgaySinh: req.body.NgaySinh,
                        GioiTinh: req.body.GioiTinh,
                        SoDienThoai: req.body.SoDienThoai,
                        Email: req.body.Email,
                        DiaChi: req.body.DiaChi,
                        MaTK: tai_khoan.MaTK,
                        LinkAvatar: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg',
                        ID_LogIn: log_in.ID_LogIn,
                    })
                }
                else {
                    var hoc_vien = await models.hocvien.create({
                        HoTen: req.body.HoTen,
                        NgaySinh: req.body.NgaySinh,
                        GioiTinh: req.body.GioiTinh,
                        SoDienThoai: req.body.SoDienThoai,
                        Email: req.body.Email,
                        DiaChi: req.body.DiaChi,
                        MaTK: tai_khoan.MaTK,
                        LinkAvatar: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg',
                        ID_LogIn: log_in.ID_LogIn,
                    })
                }

                res.redirect('/login');
            }
        }
    }
}

module.exports = new RegisterController();
