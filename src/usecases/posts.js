//Segundo paso / crear un endponit
//para consultar los posts
//Exportar los modelos desde la ruta relativa
const Posts = require('./../models/posts')

function getPosts () {
    //Regresa una promesa
    return koders.find({})
}

function createPost () {
    return Posts.create({
        date,
        lastName,
        name,
        picUrl,
        savedPost,
        tags,
        text,
        title
    })
}

//exportarlo como objeto para acceder varias instancias
module.exports = {
    getPosts,
    createPost
}