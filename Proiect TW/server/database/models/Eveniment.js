const Sequelize = require('sequelize');
const sequelize=require('../server');


const Eveniment=sequelize.define('Eveniment',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nume:Sequelize.STRING,
    descriere:Sequelize.STRING,
    data:Sequelize.STRING,
    durata:Sequelize.INTEGER,
    organizator:Sequelize.STRING

},{
    defaultScope:{
        attributes:{
            exclude: ['descriere']
        }
    }
})

module.exports=Eveniment;