const express = require('express');
const router = express.Router();
const users = require('./controller/usuarios')


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/registro', (req, res) =>{
    res.render('registro')
})

router.post('/guardar', users.crear)

router.post('/login', users.login)

module.exports = router