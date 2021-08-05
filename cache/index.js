const express = require('express');
const bodyParser = require('body-parser')

const config = require('../api/config');

const app = express();
const router = require('./network')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rutas
app.use('/', router)

app.listen(config.cacheService.port, () => {
    console.log(`Servicio de cache redis corriendo en el puerto ${config.cacheService.port}`);
})
