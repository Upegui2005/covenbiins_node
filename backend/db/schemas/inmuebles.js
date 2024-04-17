const mongoose = require('mongoose');
const {Schema} = mongoose;

const inmuebles = new Schema({
    nombre: {
        type: String,
        required: [true, "Debe contener un nombre"]
    },
    tipoInmueble: {
        type: String,
        required: [true, "Selecciona un tipo de inmueble"]
    },
    descripcion: {
        type:String,
        required: [true, "Debe contener una descripcion"],
        maxLength: [250, "La descripcion debe tener maximo 250 caracteres"]
    },
    precio: {
        type: Number,
        required: [true, "El precio debe ser registrado"],
        min: [5000000, "El precio minimo es de 5.000.000 millones de pesos"],
    },
    direccion: {
        type: String,
        required: [true, "Debe contener la direccion"],
        lowercase: true
    },
    categoria: {
        type: String,
        required: [true, "Seleccione una categoria"]
    },
    ciudad: {
        type: String,
        required: [true, "Ingrese la ciudad"],
        minLength: [5, "Debe escribir una ciudad existente"]
    },
    area: {
        type: Number,
        required: [true, "Asignar el area del inmueble es obligatorio"],
        min: [20, "El area de la casa debe ser de minimo 20m2"]
    },
    habitaciones: {
        type:Number,
        required:[true, "Debe contener las habitaciones del inmueble"],
        min: 0
    },
    banos: {
        type: Number,
        required: [true, "Debe contener los baños del inmueble"],
        min: 0
    },
    estrato:{
        type: Number,
        required: [true, "Debe contener el estrato del inmueble"],
        min: [1, "El estrato debe ser com minimo de 1"],
        max: [6, "El estrato no puede ser superior a 6"]
    },
    imagen:{
        type: String,
        required: [true, "Debe subir una imagen"]
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
        required: false
    }
})

module.exports = mongoose.model('inmuebles', inmuebles);