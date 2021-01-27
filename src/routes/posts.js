//Tercer paso
const express = require('express')
//Esportar los casos de uso desde la ruta relativa
const Posts = require('./../usecases/posts')
//Crear un router
const router = express.Router()

router.get('/', async (request, response) => {
    //Esta funcion regresa una promesa, marcar como asincrona con 'async'
    const allPosts = await Posts.getPosts()
    //La data a retornar
    response.json({
        success: true,
        data: allPosts 
    })
})

router.post('/', async (request, response) => {
    const { date, lastName, name, picUrl, savedPost, tags, text, title } = request.body
    const createdPost = await this.Post.create(date, lastName, name, picUrl, savedPost, tags, text, title)

    response.json({
        success: true,
        data: createdPost
    })
})
//El router se monta en el servidor con:
module.exports = router
