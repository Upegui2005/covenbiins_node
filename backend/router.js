const express = require('express');
const router = express.Router();
const users = require('./controller/usuarios')
const inm = require('./controller/inmuebles');

const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/uploads/'); // Ruta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    }
});

const upload = multer({ storage: storage });



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

router.post('/guardar_inmueble', upload.single('imagen'), inm.crear)

router.get('/catalogo', inm.catalogo)

module.exports = router