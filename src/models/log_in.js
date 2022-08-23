const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_in', {
    ID_LogIn: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pass: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LoaiNguoiDung: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log_in',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_LogIn" },
        ]
      },
    ]
  });
};
