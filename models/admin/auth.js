const {DataTypes} = require('sequelize')
const sequelize = require('../../config/database')
const role = require('../../services/models/roles')
const adminAuth = sequelize.define("admin",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    email : {
        type : DataTypes.STRING,
        unique : true,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    name :{
        type : DataTypes.STRING,
        allowNull : false
    },
    roleId : {
        type : DataTypes.INTEGER,
        references : {
            model : role,
            key : "id"
        },
        allowNull : false,
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE',
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
})

module.exports = adminAuth;