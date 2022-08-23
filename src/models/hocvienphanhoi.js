const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hocvienphanhoi', {
    STT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaHV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hocvien',
        key: 'MaHV'
      }
    },
    MaKH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'khoahoc',
        key: 'MaKH'
      }
    },
    NoiDung: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    ThoiGian: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hocvienphanhoi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STT" },
          { name: "MaHV" },
          { name: "MaKH" },
        ]
      },
      {
        name: "FK_HocVienPhanHoi_HocVien",
        using: "BTREE",
        fields: [
          { name: "MaHV" },
        ]
      },
      {
        name: "FK_HocVienPhanHoi_KhoaHoc",
        using: "BTREE",
        fields: [
          { name: "MaKH" },
        ]
      },
    ]
  });
};
