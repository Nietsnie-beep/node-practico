const express = require('express');
const { upsert } = require('../../../store/dummy');

const response = require('../../network/response');
const controller = require('../auth/controller');
const Controller = require('./index')

const router = express.Router();

//routes
router.get('/', list)

function list(req,res,next) {
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

module.exports = router