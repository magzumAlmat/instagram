const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');


const Comments = sequelize.define('comments', {
    text: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    post_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stories_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

// User.belongsTo(Role, {foreignKey: 'roleId'});
// User.belongsTo(Company, { foreignKey: 'companyId'});

module.exports = Comments;