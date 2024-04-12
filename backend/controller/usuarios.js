const usuarios = require('../db/schemas/usuarios')
const users = {}


users.crear = async (req, res) =>{
    const usuario = new usuarios({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        rol: req.body.rol,
        email: req.body.email,
        password: req.body.contrasena
    }); 
    await usuario.save();
    res.redirect('/')
}

users.login = async (req, res) =>{
    const usuario = await usuarios.findOne({
        email: req.body.email,
        password: req.body.password
    });
    console.log(usuario)
    if (!usuario){
        res.redirect('/')
    }
    else{
        req.session.cedula = usuario.cedula
        res.redirect('/')
        console.log(usuario.cedula)
    }
    //res.json(usuario);
}

users.logout = async (req, res) =>{
    req.session.destroy((err) => {
        if (err){
            console.error(err)
        }
        res.redirect('/')
    })
}

module.exports = users