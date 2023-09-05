const express = require('express');
const logger = require('morgan');
const passport = require('./app/auth/passport');
const app = express();
cors = require('cors');

app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

app.use(require('./app/auth/routes'))
app.use(require('./app/region/routes'))
app.use(require('./app/blog/routes'))
app.use(require('./app/followers/routes'))
app.use(require('./app/like/routes'))

app.listen(8000, () =>{
    console.log("Server is listening on port 8000");
})