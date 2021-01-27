require('dotenv').config()
//Quinto paso
//Este archivo tiene la tarea de lavantar nuestra aplicación
//Se necesita importar el servidor
//Importar la base de datos
const db = require('./src/lib/db')
const server = require('./src/server')

//Funcion para escuchar al servidor
//Una vez conectada la base de datos se levanta el servidor
db.connect//Sin parantesis esta solo exportando directamente la promesa
    .then(() =>{
        server.listen('8080', () =>{
            console.log('Server is listening')
        })
    })
    .catch(() =>{
        console.error('Error: ', error);
    })