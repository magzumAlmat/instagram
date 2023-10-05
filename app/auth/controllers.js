const User=require('./User')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const jwtOptions = {
    secretOrKey: "mySecret"
  };

const authentificateUser=async(req,res)=>{
    console.log('iam in auth user')
    let user = await User.findOne({where: {email: req.body.email}});

    const {  password } = req.body;
    

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        full_name: user.full_name,
        phone: user.phone,
    }, jwtOptions.secretOrKey, {
        expiresIn: 24 * 60 * 60 * 365
    });
    res.status(200).json({ prompt: 'Authorization successful' ,token});

}




// const createUser =async(req,res)=>{
//     console.log('iam in create user')
    
//     let user = await User.findOne({where: {email: req.body.email}});
//     console.log(user)
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     if (!user){
//         await User.create({
//             email:req.body.email,
//             username:req.body.username,
//             password:hashedPassword
//         })
//         const token = jwt.sign({
//             id: user.id,
//             email: user.email,
//             full_name: user.full_name,
//             phone: user.phone,
          
//         }, jwtOptions.secretOrKey, {
//             expiresIn: 24 * 60 * 60 * 365
//         });
//         res.status(200).send({token});
//     }else{

//     const token = jwt.sign({
//         id: user.id,
//         email: user.email,
//         full_name: user.full_name,
//         phone: user.phone,
      
//     }, jwtOptions.secretOrKey, {
//         expiresIn: 24 * 60 * 60 * 365
//     });
//     res.status(200).send({token});
// }
// }


const createUser = async (req, res) => {
    console.log('iam in create user')
    
    let user = await User.findOne({ where: { email: req.body.email } });
    console.log(user)
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    if (!user) {
        try {
            user = await User.create({
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword
            });
            const token = jwt.sign({
                id: user.id,
                email: user.email,
                full_name: user.full_name,
                phone: user.phone,
            }, jwtOptions.secretOrKey, {
                expiresIn: 24 * 60 * 60 * 365
            });
            res.status(200).send({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create user' });
        }
    } else {
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            phone: user.phone,
        }, jwtOptions.secretOrKey, {
            expiresIn: 24 * 60 * 60 * 365
        });
        res.status(200).send({ token });
    }
}


const getAllUsers=async(req,res)=>{
    let users = await User.findAll();
    console.log('this is user from getAllUsers',users)
    res.status(200).send(users)
}
module.exports={createUser,authentificateUser,getAllUsers}