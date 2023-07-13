const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');


const Likes = sequelize.define('likes', {
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stories_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

// User.belongsTo(Role, {foreignKey: 'roleId'});
// User.belongsTo(Company, { foreignKey: 'companyId'});

module.exports = Likes;