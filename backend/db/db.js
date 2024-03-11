const moongose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@covenbiins.nzr3etv.mongodb.net/Covenbiins`

function connect() {
    moongose.connect(uri)
    .then(() =>{
        console.log('Conectada')
    })
    .catch(err =>{
        console.error('Error' + err)
    })
}

module.exports = {connect};