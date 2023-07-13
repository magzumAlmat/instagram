const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../config/db');


const stories = sequelize.define('stories', {
    video: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_of_expire: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

// User.belongsTo(Role, {foreignKey: 'roleId'});
// User.belongsTo(Company, {foreignKey: 'companyId'});

module.exports = stories;