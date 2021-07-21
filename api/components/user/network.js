const express = require('express');

const response = require('../../network/response');
const Controller = require('./index')

const router = express.Router();

router.get('/', (req, res) => {
    const lista = Controller.list();
    response.success(req,res, lista, 200 )
});

module.exports = router;