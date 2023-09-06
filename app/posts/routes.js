const express=require('express')
const router=express.Router()
// const {sendVerificationEmail,verifyCode}=require('./controllers')

// router.post('/api/auth/sendmail',sendVerificationEmail )
// router.post('/api/auth/verifycode',verifyCode )
const passport =require('passport')

const {upload} = require('./utils')
const {createPost}=require('./controllers')


router.post('/api/createpost',passport.authenticate('jwt', {session: false}),upload.single('post_media'),createPost)
// router.get('/api/post', passport.authenticate('jwt', {session: false}), getMyPosts)

module.exports=router