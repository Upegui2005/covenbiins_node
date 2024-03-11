const usuarios = require('../db/schemas/usuarios')
const users = {}

users.crear = async (req, res) =>{
    const usuario = new usuarios(
        _id = req.cedula,
        nombre = req.nombre,
        apellido = req.apellido,
        fechaNacimiento = req.fechaNacimiento,
        telefono = req.telefono,
        direccion = req.direccion,
        email = req.email,
        password = req.contrasena
    );
    await usuario.save();
    res.json({
        'status': 'Registrado'
    })
}

module.exports = users