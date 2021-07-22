const express = require('express');

const response = require('../../network/response');
const Controller = require('./index')

const router = express.Router();

router.get('/', (req, res) => {
    const lista = Controller.list()
    .then(()) => {};
    response.success(req,res, lista, 200 )
});

router.get('/:id', (req, res) => {
    const user = Controller.get(req.params.id);
    response.success(req,res, lista, 200 );
});

module.exports = router;