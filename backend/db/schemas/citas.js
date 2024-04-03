const mongoose = require('mongoose');
const {Schema} = mongoose

const citas = new Schema ({
    fechaCita: {
        type: Date,
        required: true, 
        unique: true
    },
    usuario:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios'
    }],
    asesor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios'
    }],
    
})


module.exports = mongoose.model('citas', citas);