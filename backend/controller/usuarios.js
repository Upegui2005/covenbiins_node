const usuarios = require('../db/schemas/usuarios')
const users = {}


users.crear = async (req, res) =>{
    const usuario = new usuarios({
        _id: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        email: req.body.email,
        password: req.body.contrasena
    });
    await usuario.save();
    res.render('index')
}

users.login = async (req, res) =>{
    const usuario = await usuarios.findOne({
        email: req.body.email,
        password: req.body.password
    });
    console.log(usuario)
    if (!usuario){
        res.render('index')
    }
    else{
        res.cookie("usuario", usuario, {maxAge: 900000, httpOnly: true});
        console.log(req.cookie)
        res.render('home_view')
    }
    //res.json(usuario);
}

module.exports = users