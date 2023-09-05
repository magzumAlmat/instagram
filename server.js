const express=require('express')
const app=express();
const logger=require('morgan') // для логирования кто к нам по какому запросу стучался
const multer=require('multer') // для formdata

const passport=require('./app/auth/passport')
cors = require('cors');
//middleware 1----
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'))
app.use(express.urlencoded())  //сериализация   на уровне экспресса для того чтобы бэк понял пост запрос 
app.use(express.json())
//app.use(upload.any())  парсинг формдаты

// app.get('/',(req,res)=>{
//     res.send('OK!',req.user.id)
// })

// app.post('/api',(req,res)=>{
//     console.log(req.body)
//     res.status(200).send('POST /api works | Success!')
// })

app.use(passport.initialize());

app.use(require('./app/auth/routes'))

app.use(require('./app/posts/routes'))



app.listen (3001,()=>{
    console.log('Server is listening on port 3001')
})



