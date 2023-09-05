const Post = require('./models/Posts')

const jwt = require("jsonwebtoken");

const jwtOptions = {
    secretOrKey: "11111"
};
const MediaFile = require('./models/MediaFile');

const createPost = async (req, res) => {
    console.log('iam in create post', req.user.id)

    try {
        await Post.create({
            userId: req.user.id,
            image: req.body.image,
            description: req.body.description,
            profile_picture_url: req.body.profile_picture_url,
            image_url: req.body.image_url

        });
        await MediaFile.create({
            postId: post.id,
            link: '/content/' + req.file.filename
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to create post'});
    }
    res.status(201).json(post);
    res.status(200).send('Post Created');

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
