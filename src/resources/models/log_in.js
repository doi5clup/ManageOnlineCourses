const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'log_in',
        {
            ID_LogIn: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            UserName: {
                type: DataTypes.STRING(15),
                allowNull: true,
            },
            Password: {
                type: DataTypes.STRING(15),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'log_in',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'ID_LogIn' }],
                },
            ],
        },
    );
};
