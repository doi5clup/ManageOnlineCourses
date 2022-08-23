const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'khoahoc',
        {
            MaKH: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            TenKH: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            NgayTao: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            NgayBD: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            NgayKT: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            HocPhi: {
                type: DataTypes.DOUBLE,
                allowNull: true,
            },
            SLHV_Max: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            MoTa: {
                type: DataTypes.STRING(225),
                allowNull: true,
            },
            LinhVuc: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            LichHoc: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            LinkAnh: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            GVCN: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'giaovien',
                    key: 'MaGV',
                },
            },
        },
        {
            sequelize,
            tableName: 'khoahoc',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'MaKH' }],
                },
                {
                    name: 'FK_KhoaHoc_GiaoVien',
                    using: 'BTREE',
                    fields: [{ name: 'GVCN' }],
                },
            ],
        },
    );
};
