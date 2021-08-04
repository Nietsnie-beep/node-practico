const express = require('express');
const secure = require('./secure');
const response = require('../../network/response');
const Controller = require('./index')

const router = express.Router();

//routes
router.get('/', list)
router.post('/follow/:id', secure('follow'), follow)
router.get('/:id/followers', secure('follow'), following)
router.post('/', upserting)
router.put('/', secure('update'), upserting)

function list(req, res) {
    Controller.list()
        .then((list) => {
            response.success(req, res, list, 200)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        })
}

router.get('/:id', (req, res) => {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        })
});

function upserting(req, res) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });

}

function follow(req, res, next) {
    Controller.follow(req.user.id, req.params.id)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(next);
}

// function Getfollowers(req, res, next) {
//     Controller.followers(req.user.id)
//         .then(data => {
//             response.success(req, res, data, 201);
//         })
//         .catch(next);
// }

function following(req, res, next) {
    return Controller.following(req.params.id)
        .then((data) => {
            return response.success(req, res, data, 200 )
        })
        .catch(next)
}

module.exports = router;