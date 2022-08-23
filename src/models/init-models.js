var DataTypes = require("sequelize").DataTypes;
var _giaovien = require("./giaovien");
var _giaovienphanhoi = require("./giaovienphanhoi");
var _hocvien = require("./hocvien");
var _hocvien_tg_khoahoc = require("./hocvien_tg_khoahoc");
var _hocvienphanhoi = require("./hocvienphanhoi");
var _khoahoc = require("./khoahoc");
var _log_in = require("./log_in");
var _taikhoan = require("./taikhoan");

function initModels(sequelize) {
  var giaovien = _giaovien(sequelize, DataTypes);
  var giaovienphanhoi = _giaovienphanhoi(sequelize, DataTypes);
  var hocvien = _hocvien(sequelize, DataTypes);
  var hocvien_tg_khoahoc = _hocvien_tg_khoahoc(sequelize, DataTypes);
  var hocvienphanhoi = _hocvienphanhoi(sequelize, DataTypes);
  var khoahoc = _khoahoc(sequelize, DataTypes);
  var log_in = _log_in(sequelize, DataTypes);
  var taikhoan = _taikhoan(sequelize, DataTypes);

  giaovien.belongsToMany(khoahoc, { as: 'MaKH_khoahocs', through: giaovienphanhoi, foreignKey: "MaGV", otherKey: "MaKH" });
  hocvien.belongsToMany(khoahoc, { as: 'MaKH_khoahoc_hocvien_tg_khoahocs', through: hocvien_tg_khoahoc, foreignKey: "MaHV", otherKey: "MaKH" });
  hocvien.belongsToMany(khoahoc, { as: 'MaKH_khoahoc_hocvienphanhois', through: hocvienphanhoi, foreignKey: "MaHV", otherKey: "MaKH" });
  khoahoc.belongsToMany(giaovien, { as: 'MaGV_giaoviens', through: giaovienphanhoi, foreignKey: "MaKH", otherKey: "MaGV" });
  khoahoc.belongsToMany(hocvien, { as: 'MaHV_hocviens', through: hocvien_tg_khoahoc, foreignKey: "MaKH", otherKey: "MaHV" });
  khoahoc.belongsToMany(hocvien, { as: 'MaHV_hocvien_hocvienphanhois', through: hocvienphanhoi, foreignKey: "MaKH", otherKey: "MaHV" });
  giaovienphanhoi.belongsTo(giaovien, { as: "MaGV_giaovien", foreignKey: "MaGV"});
  giaovien.hasMany(giaovienphanhoi, { as: "giaovienphanhois", foreignKey: "MaGV"});
  khoahoc.belongsTo(giaovien, { as: "GVCN_giaovien", foreignKey: "GVCN"});
  giaovien.hasMany(khoahoc, { as: "khoahocs", foreignKey: "GVCN"});
  hocvien_tg_khoahoc.belongsTo(hocvien, { as: "MaHV_hocvien", foreignKey: "MaHV"});
  hocvien.hasMany(hocvien_tg_khoahoc, { as: "hocvien_tg_khoahocs", foreignKey: "MaHV"});
  hocvienphanhoi.belongsTo(hocvien, { as: "MaHV_hocvien", foreignKey: "MaHV"});
  hocvien.hasMany(hocvienphanhoi, { as: "hocvienphanhois", foreignKey: "MaHV"});
  giaovienphanhoi.belongsTo(khoahoc, { as: "MaKH_khoahoc", foreignKey: "MaKH"});
  khoahoc.hasMany(giaovienphanhoi, { as: "giaovienphanhois", foreignKey: "MaKH"});
  hocvien_tg_khoahoc.belongsTo(khoahoc, { as: "MaKH_khoahoc", foreignKey: "MaKH"});
  khoahoc.hasMany(hocvien_tg_khoahoc, { as: "hocvien_tg_khoahocs", foreignKey: "MaKH"});
  hocvienphanhoi.belongsTo(khoahoc, { as: "MaKH_khoahoc", foreignKey: "MaKH"});
  khoahoc.hasMany(hocvienphanhoi, { as: "hocvienphanhois", foreignKey: "MaKH"});
  giaovien.belongsTo(log_in, { as: "ID_LogIn_log_in", foreignKey: "ID_LogIn"});
  log_in.hasMany(giaovien, { as: "giaoviens", foreignKey: "ID_LogIn"});
  hocvien.belongsTo(log_in, { as: "ID_LogIn_log_in", foreignKey: "ID_LogIn"});
  log_in.hasMany(hocvien, { as: "hocviens", foreignKey: "ID_LogIn"});
  giaovien.belongsTo(taikhoan, { as: "MaTK_taikhoan", foreignKey: "MaTK"});
  taikhoan.hasMany(giaovien, { as: "giaoviens", foreignKey: "MaTK"});
  hocvien.belongsTo(taikhoan, { as: "MaTK_taikhoan", foreignKey: "MaTK"});
  taikhoan.hasMany(hocvien, { as: "hocviens", foreignKey: "MaTK"});

  return {
    giaovien,
    giaovienphanhoi,
    hocvien,
    hocvien_tg_khoahoc,
    hocvienphanhoi,
    khoahoc,
    log_in,
    taikhoan,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
