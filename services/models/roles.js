const {DataTypes} = require('sequelize')
const sequelize = require('../../config/database')

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'role' 
});
module.exports = Role;
