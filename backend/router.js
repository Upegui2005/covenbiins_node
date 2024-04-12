const express = require('express');
const router = express.Router();
const users = require('./controller/usuarios')
const inm = require('./controller/inmuebles');
const citas = require('./controller/citas')

const upload = require('./multer')

router.get('/', (req, res) => {
    res.render('index', {session: req.session.cedula})
})

router.get('/registro', (req, res) =>{
    if (req.session.cedula){
        res.redirect('/')
    }else{
        res.render('registro')
    }
})

router.post('/guardar', users.crear)

router.post('/login', users.login)

router.get('/logout', users.logout)

router.get('/publicar', (req,res) => {
    if (req.session.cedula){
        res.render('inmuebles/publicar')
    }
    else{
        res.redirect('/')
    }
})

router.post('/guardar_inmueble', upload.single('imagen'), inm.crear)

router.get('/catalogo', inm.catalogo)

router.get('/detalle/:_id', inm.detalle)

router.post('/citas', citas.crear)

module.exports = router