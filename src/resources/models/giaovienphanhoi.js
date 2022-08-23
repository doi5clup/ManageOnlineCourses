const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'giaovienphanhoi',
        {
            STT: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            MaGV: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'giaovien',
                    key: 'MaGV',
                },
            },
            MaKH: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'khoahoc',
                    key: 'MaKH',
                },
            },
            NoiDung: {
                type: DataTypes.STRING(225),
                allowNull: true,
            },
            ThoiGian: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'giaovienphanhoi',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [
                        { name: 'STT' },
                        { name: 'MaGV' },
                        { name: 'MaKH' },
                    ],
                },
                {
                    name: 'FK_GiaoVienPhanHoi_HocVien',
                    using: 'BTREE',
                    fields: [{ name: 'MaGV' }],
                },
                {
                    name: 'FK_GiaoVienPhanHoi_KhoaHoc',
                    using: 'BTREE',
                    fields: [{ name: 'MaKH' }],
                },
            ],
        },
    );
};
