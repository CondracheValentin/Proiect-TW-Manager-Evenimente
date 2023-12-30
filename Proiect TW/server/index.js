const express = require('express')
const cors= require('cors');
const EvenimentRoutes=require('./routes/EvenimentRoutes');
const app = express();
const path = require('path');



const Eveniment=require('./database/models/Eveniment');
const Locatie=require('./database/models/Locatie');

Locatie.hasMany(Eveniment,{foreignKey: 'locatieId'});

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/eveniments',EvenimentRoutes);


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(8080,function(){
   console.log('Server listening on port: ' + 8080)
})