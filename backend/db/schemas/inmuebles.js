const mongoose = require('mongoose');
const {Schema} = mongoose;

const inmuebles = new Schema({
    nombre: {
        type: String,
        require: true
    },
    tipoInmueble: {
        type: String,
        require: true
    },
    descripcion: {
        type:String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    ciudad: {
        type: String,
        require: true
    },
    area: {
        type: Number,
        require: true
    },
    habitaciones: {
        type:Number,
        require:true
    },
    banos: {
        type: Number,
        require: true
    },
    estrato:{
        type: Number,
        require: true
    },
    imagen:{
        type: String,
        require: true
    },
})

module.exports = mongoose.model('inmuebles', inmuebles);