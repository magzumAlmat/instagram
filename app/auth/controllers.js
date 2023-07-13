const User=require('./User')

const jwt = require("jsonwebtoken");
const jwtOptions = {
    secretOrKey: "11111"
  };
const authentificateUser=async(req,res)=>{

}


const createUser =async(req,res)=>{
    console.log('iam in create user')
    await User.create({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
});

let user = await User.findOne({where: {email: req.body.email}});

const token = jwt.sign({
    id: user.id,
    email: user.email,
    full_name: user.full_name,
    phone: user.phone,
    // role: {
    //     id: role.id,
    //     name: role.name
    // }, 
}, jwtOptions.secretOrKey, {
    expiresIn: 24 * 60 * 60 * 365
});
res.status(200).send({token});
}
module.exports={createUser}


