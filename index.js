const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const cors =  require('cors')
const router = require("./routes/routes")
const mongoose = require('mongoose');

 
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Configurações Db
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/routeasydb',{
    useUnifiedTopology: true,
    useNewUrlParser: true 
}).then(()=>{
  console.log('Conectado ao mongo')
}).catch((err) => {
  console.log('Erro ao se conectar ' + err)
})


//Rotas 
app.use("/",router);

module.exports = app