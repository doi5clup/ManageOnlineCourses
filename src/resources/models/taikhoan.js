const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'taikhoan',
        {
            MaTK: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            SoTK: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            SoDu: {
                type: DataTypes.DOUBLE,
                allowNull: true,
            },
            NganHangLK: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'taikhoan',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'MaTK' }],
                },
            ],
        },
    );
};
