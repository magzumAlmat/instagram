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
    res.status(200).json({ prompt: 'Authorization successful' });

}



//-------------------------------------------------------------------
// const createUser =async(req,res)=>{
// let user = await User.findOne({ where: { email:req.body.email } });


//     try {
//         await User.create({
//             email:req.body.email,
//             username:req.body.username,
//             password:req.body.password
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Не получилось без ошибок создать юзера' });
//       }

//     const token = jwt.sign({
//         id: user.id,
//         email: user.email,
//         username: user.username,
//         password:user.password
//     }, 'mySecret', {
//         expiresIn: 24 * 60 * 60 * 365
//     });
// res.status(200).send('User Created',{token});

    const createUser =async(req,res)=>{
        console.log('iam in create user')
        
        let user = await User.findOne({where: {email: req.body.email}});
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if (!user){
            await User.create({
                email:req.body.email,
                username:req.body.username,
                password:hashedPassword
            })
            const token = jwt.sign({
                id: user.id,
                email: user.email,
                full_name: user.full_name,
                phone: user.phone,
              
            }, jwtOptions.secretOrKey, {
                expiresIn: 24 * 60 * 60 * 365
            });
            res.status(200).send({token});
        }else{

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            phone: user.phone,
          
        }, jwtOptions.secretOrKey, {
            expiresIn: 24 * 60 * 60 * 365
        });
        res.status(200).send({token});
    }
            // res.status(200).send('User Created');
           
        
        // res.status(200).send('User Created');
       
    
    



    

//Если юзер не создался то создаем-------------------------------------------------------------------
// if (!user) {
//     user = await User.create({ email:req.body.email, username: undefined, password: undefined });
//   }

}
module.exports={createUser,authentificateUser}