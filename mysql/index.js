const express = require('express');
const bodyParser = require('body-parser')

const config = require('../api/config');

const app = express();
const router = require('./network')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rutas
app.use('/', router)

app.listen(config.mysqlService.port, () => {
    console.log(`Servicio de mysql corriendo en el puerto ${config.mysqlService.port}`);
})

