//Cuarto paso
// Este archivo guarda la definicion del servidor
/* -Que rutas van a existir
   -Que middlewares va a usar */

//Requiere una coneccion a express
const express = require('express')
//Se necesista exportar el router
const postsRouter = require('./routes/posts')
//Aplicacion de express
const server = express()
//Va a parsear todas las peticiones a json(middleware)
server.use(express.json())
//Funcion para montar el router, la ruta de reouter depende de donde se coloque en esta caso (/) en la raiz(routes)
server.use('/posts', postsRouter)
//Funcion que llama a la raiz del servidor
server.get('/', (request, response) => {
   response.json({
      success: true,
      message: 'DesafioBackend'
   })
})

//Exporta el servidor hacia el index
module.exports = server