const Post = require('./models/Posts')


const MediaFile = require('./models/MediaFile');
const Story = require('./models/Story')
const Commentary = require('./models/Commentary');
const User = require('../auth/User');
// const { Op } = require('sequelize');
// const fs = require('fs');
//const path = require('path');

const createPost = async (req, res) => {
    console.log('iam in create post', req.user.id)

 
    if (!req.user || !req.user.id) {
      return res.status(400).json({ error: 'User ID is missing or invalid.' });
    }
    // try {
        const post = await Post.create({
          creatorId: req.user.id,
          description: req.body.description,
        });
        await MediaFile.create({
          postId: post.id,
          link: '/content/' + req.file.filename
        });
    
        res.status(201).json(post);
      
      // } catch (error) {
      //   console.error(error);
      //   res.status(500).json({ error: 'Failed to create post' });
      // }
    
    // res.status(200).send('Post Created');

}
// const getMyPosts = async (req, res) => {
// try {
//     const myPosts = await Post.findAll({ where: { creatorId: req.user.id } });
//     const postIds = myPosts.map(post => post.id);
//     const postMedia = await MediaFile.findAll({ where: { postId: postIds } });

//     const postWithMediaLinks = myPosts.map(post => {
//       return {
//         ...post.toJSON(),
//         mediaLinks: postMedia.filter(media => media.postId === post.id).map(media => media.link)
//       };
//     });
//     res.status(200).send(postWithMediaLinks);
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to get posts' });
// }
// };

module.exports = {
    createPost
}
