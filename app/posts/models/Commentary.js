const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Story = require('./Story');

const Post = require('./Posts');
const User = require('../../auth/User');

const Commentary = sequelize.define('Commentary', {
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  commentary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Commentary.belongsTo(User, { foreignKey: 'authorId' });
Commentary.belongsTo(Post, { foreignKey: 'postId' });

module.exports = Commentary;