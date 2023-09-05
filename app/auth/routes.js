const express=require('express')
const router=express.Router()
const passport = require('passport');
// const {sendVerificationEmail,verifyCode}=require('./controllers')

// router.post('/api/auth/sendmail',sendVerificationEmail )
// router.post('/api/auth/verifycode',verifyCode )

const {createUser,authentificateUser}=require('./controllers')

router.post('/api/auth/createuser',createUser)
router.post('/api/auth/login',passport.authenticate('jwt', {session: false}),authentificateUser)

module.exports=router