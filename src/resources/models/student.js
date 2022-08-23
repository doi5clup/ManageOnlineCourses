const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'student',
        {
            ID: {
                type: DataTypes.CHAR(15),
                allowNull: false,
                primaryKey: true,
            },
            Name: {
                type: DataTypes.CHAR(15),
                allowNull: false,
            },
            Mark: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            Image: {
                type: DataTypes.CHAR(10),
                allowNull: true,
            },
            Address: {
                type: DataTypes.CHAR(20),
                allowNull: true,
            },
            note: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'student',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID' }],
                },
            ],
        },
    );
};
