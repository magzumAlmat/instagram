// id 
// image 
// descrition
// userId

const {DataTypes} = require('sequelize')
const sequelize = require('../../config/db')
const Role = require('./Role')
const Company = require('./Company')
const User = sequelize.define('User', {
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
       
    },
    descrition: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
       
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },

},{
    timestamps:false,})

User.belongsTo(Role,{foreignKey:'roleId'})
User.belongsTo(Company,{foreignKey:'companyId'})
module.exports = User;
