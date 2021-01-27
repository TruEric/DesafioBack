//Primer paso
//Instalar mongoose
const mongoose = require('mongoose')

//Crear schema
const schema = new mongoose.Schema({
    //Esquema de un post
    date: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        required: true
    },
    name: {
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        required: true
    },
    picUrl: {
        type: String,
        minlength: 2,
        maxlength: 100,
        trim: true,
        required: true
    },
    tags:{
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        required: true
    },
    text: {
        type: String,
        minlength: 5,
        maxlength: 250,
        required: true
    },
    title: {
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        required: true
    }
})

//Este model representa a la coleccion 'posts'
const model = mongoose.model('posts', schema)
//Para exportar el modelo
module.exports = model