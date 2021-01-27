const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env
//Sexto paso
//Conectar con la base de datos
//Importar mongoose, que no s ayuda a conectar
const mongoose = require('mongoose')

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

//Se exporta en un objeto
module.exports = {
    connect
}