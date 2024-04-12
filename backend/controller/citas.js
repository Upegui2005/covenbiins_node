const { json } = require('express');
const citas = require('../db/schemas/citas')

exports.crear = async (req, res) => {
    const cita = new citas(req.body);
    await cita.save();
    console.log(citas);
    res.json(citas);
}