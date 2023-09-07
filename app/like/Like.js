const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../auth/User');
const Posts = require('../posts/models/Posts');
const Story = require('../posts/models/Story')
const Commentary = require('../posts/models/Commentary')

const Like = sequelize.define('Like', {

});

Like.belongsTo(User, { foreignKey: 'userId' });
Like.belongsTo(Posts, { foreignKey: 'postId' });
Like.belongsTo(Story, { foreignKey: 'storyId' });
Like.belongsTo(Commentary, { foreignKey: 'commentaryId' });

module.exports = Like;