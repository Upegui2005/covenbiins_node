const mongoose = require('mongoose');
const {Schema} = mongoose

const citas = new Schema ({
    fechaCita: {
        type: Date,
        required: [true, "Debes ingresar una fecha para la cita"],
        min: Date.now()
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    asesor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [true, "Selecciona un asesor"],
    },
});


module.exports = mongoose.model('citas', citas);