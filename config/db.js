const{Sequelize} = require('sequelize');

const dbConf = require('./config')

const sequelize = new Sequelize({
    database:dbConf.development.database, 
    username:dbConf.development.username,
    host:dbConf.development.host,
    dialect:dbConf.development.dialect,
    password:dbConf.development.password, 
})
sequelize
    .authenticate ( )
    .then ( () => {
        console. log( 'Connection to the database has been established successfully.')
        }).catch((error) =>{

console.error('Unable to connect to the database:', error);

});

module.exports = sequelize;
