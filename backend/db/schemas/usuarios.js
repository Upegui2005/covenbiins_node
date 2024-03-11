const mongoose = require('mongoose');
const {Schema} = mongoose

const usuarios =  new Schema({
        _id:{
            type:Number,
            require: true,
            unique: true
        },
        nombre: {
            type: String,
            require: true
        },
        apellido: {
            type: String,
            require: true
        },
        fechaNacimiento: {
            type: Date,
            require: true
        },
        telefono: {
            type: Number,
            require: true
        },
        direccion: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            validate: {
                validator: function (value) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: 'Email incorrecto'
            },
        },
        password: {
            type: String,
            require: true
        }
})

module.exports = mongoose.model('usuarios', usuarios);
