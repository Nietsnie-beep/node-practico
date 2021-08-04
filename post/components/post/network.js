const express = require('express');

const response = require('../../../api/network/response');

//const controller = require('../auth/controller');
const Controller = require('./index')
const secure = require('./secure')

const router = express.Router();

//routes
router.get('/', list);
router.get('/:id', get);
router.get('/user/:id', getByUser);
router.post('/',upsert)
router.put('/', secure('update'), upsert)


function list(req, res, next) {
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then(data => {
            response.success(req, res, data);
        })
        .catch(next())
}

function upsert(req, res, next) {
    Controller.upsert(req.body)
        .then(data => {
            response.success(req, res, data, 201)               
    })
    .catch (next)
}

function getByUser(req, res, next){
    Controller.getByUser(req.params.id)
        .then(data => {
            response.success(req, res, data);
        })
        .catch(next)
}

module.exports = router