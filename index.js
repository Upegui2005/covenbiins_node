const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookies = require('cookie-parser');
const app = express();
const path = require('path');
const { start } = require('repl');
require('dotenv').config();

const { connect } =  require('./backend/db/db');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookies());

app.set('port', process.env.PORT || 9191);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './frontend/views'));

app.use(express.static('./frontend/static/'));
app.use('', require('./backend/router'))

async function StartServer() {
    try {
        await connect();
        app.listen(app.get('port'), () =>{
            console.log('Server activo', app.get('port'));
        })
    } catch (err) {
        console.error('Error' +  err);
    }
}

StartServer();