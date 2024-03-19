const { json } = require('express');
const inmuebles = require('../db/schemas/inmuebles');
const inm = {};

inm.crear = async (req, res) => {
    const inmueble = new inmuebles({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tipoInmueble: req.body.tipoInmueble,
        precio: req.body.precio,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad,
        categoria: req.body.categoria,
        area: req.body.area,
        habitaciones: req.body.habitaciones,
        banos: req.body.banos,
        estrato: req.body.estrato,
        imagen: req.file.path
    });
    await inmueble.save();
    console.log(inmueble);
    res.json(inm)
}

inm.catalogo = async (req, res) =>{
    const inmueble = await inmuebles.find()
    if(inmueble){
        res.render('inmuebles/catalogo', {inm: inmueble})
        //res.json(inmueble)
    }   
    else
        res.json({"mensaje":"error al consultar los inmuebles"})
}


module.exports = inm;