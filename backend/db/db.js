const moongose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://emmaupegui2005:uyWfmgNPfZFF08GF@covenbiins.nzr3etv.mongodb.net/Covenbiins`

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