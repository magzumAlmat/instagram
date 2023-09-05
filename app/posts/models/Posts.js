// id 
// image 
// descrition
// userId
const {DataTypes} = require('sequelize')
const sequelize = require('../../../config/db')
const User=require('../../auth/User')

const Posts = sequelize.define('Post', {
    
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    timestamps:false,})

Posts.belongsTo(User,{foreignKey:'id'})

module.exports = Posts;
