const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hocvien', {
    MaHV: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HoTen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NgaySinh: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    GioiTinh: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    SoDienThoai: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DiaChi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MaTK: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'taikhoan',
        key: 'MaTK'
      }
    },
    LinkAvatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ID_LogIn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'log_in',
        key: 'ID_LogIn'
      }
    }
  }, {
    sequelize,
    tableName: 'hocvien',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaHV" },
        ]
      },
      {
        name: "FK_HocVien_TaiKhoan",
        using: "BTREE",
        fields: [
          { name: "MaTK" },
        ]
      },
      {
        name: "FK_HocVien_Log_In",
        using: "BTREE",
        fields: [
          { name: "ID_LogIn" },
        ]
      },
    ]
  });
};
