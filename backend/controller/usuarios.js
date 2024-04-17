const usuarios = require('../db/schemas/usuarios')
const nodemailer = require('nodemailer')
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
    try{
        const correo = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: "covenbiins.sena@gmail.com",
                pass: "ygqb frhd njyf oxjx",
            },
        });
        
        const mailOptions = {
            from: "covenbiins.sena@gmail.com",
            to: usuario.email,
            subject: "Registro Completado",
            html: `<strong>Bienvenido a Covenbiins</strong><br>
            <p>Nos complace que te hagas una cuenta con nosotros. Espero que encuentres lo que buscas.</p><br>
            <p>Tu rol es: <strong>${usuario.rol}</strong></p>`,
        }

        await correo.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Correo enviado "+ info.response);
            }
        })    
    }
    catch{
        console.log('Error')
    }
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