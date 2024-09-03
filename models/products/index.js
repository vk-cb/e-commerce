const {DataTypes} = require('sequelize')
const sequelize = require('../../config/database');
const adminAuth = require('../admin/auth');
const products = sequelize.define("products",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title: {type : DataTypes.STRING, allowNull : false, },
    price : {type : DataTypes.FLOAT, allowNull : false},
    description : {type : DataTypes.TEXT, allowNull : true},
    image : {type : DataTypes.STRING, allowNull : true},
    quantity : {type : DataTypes.INTEGER, allowNull : false},
    category : {type : DataTypes.STRING, allowNull : false},
    subCategory : {type : DataTypes.STRING, allowNull : true},
    adminId : {type : DataTypes.INTEGER, references : {
        model : adminAuth,
        key : "id"
    } 
       
    }
})
// products.belongsTo(adminAuth, { foreignKey: 'adminId' });
module.exports = products;