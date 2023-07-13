const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');


const Followers = sequelize.define('followers', {
    user_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    follower_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

// User.belongsTo(Role, {foreignKey: 'roleId'});
// User.belongsTo(Company, { foreignKey: 'companyId'});

module.exports = Followers;