const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarios = new Schema({
    cedula: {
        type: Number,
        required: [true, "Digita tu cédula"],
        unique: [true, "Esta cédula ya esta registrada"]
    },
    nombre: {
        type: String,
        required: [true, "Debes digitar tu nombre"]
    },
    apellido: {
        type: String,
        required: [true, "Debes ingresar tu apellido"]
    },
    fechaNacimiento: {
        type: Date,
        required: [true, "Ingresa tu fecha de nacimiento"],
        min: 2006-4-15
    },
    telefono: {
        type: Number,
        required: [true, "Ingresa tu número de contacto"]
    },
    direccion: {
        type: String,
        required: [true, "Ingresa la dirección del inmueble"],
        min: [7, "La dirección debe contener como mínimo 7 dígitos"]
    },
    rol: {
        type: String,
        required: [true, "Debes seleccionar un rol"]
    },
    email: {
        type: String,
        required: [true, "Debes ingresar un correo electrónico"],
        unique: [true, "Este correo electrónico ya está registrado"],
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Email incorrecto'
        }
    },
    password: {
        type: String,
        required: [true, "Ingresa una contraseña"]
    }
});

module.exports = mongoose.model('usuarios', usuarios);
