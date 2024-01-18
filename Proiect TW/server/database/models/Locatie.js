const Sequelize = require('sequelize');
const sequelize=require('../server');

const Locatie=sequelize.define('Locatie',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
   adresa:Sequelize.STRING,
   judet:Sequelize.STRING,
   comuna:Sequelize.STRING
})

module.exports=Locatie;