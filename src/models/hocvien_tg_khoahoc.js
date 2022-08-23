const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hocvien_tg_khoahoc', {
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
    NgayTG: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TinhTrang: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hocvien_tg_khoahoc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaHV" },
          { name: "MaKH" },
        ]
      },
      {
        name: "FK_HocVien_TG_KhoaHoc_KhoaHoc",
        using: "BTREE",
        fields: [
          { name: "MaKH" },
        ]
      },
    ]
  });
};
