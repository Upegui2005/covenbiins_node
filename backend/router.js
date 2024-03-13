const express = require('express');
const router = express.Router();
const users = require('./controller/usuarios')
const inm = require('./controller/inmuebles')


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/registro', (req, res) =>{
    res.render('registro')
})

router.post('/guardar', users.crear)

router.post('/login', users.login)

router.get('/publicar', (req,res) => {
    res.render('inmuebles/publicar')
})

router.post('/guardar_inmueble', inm.crear)

module.exports = router