const express = require("express");
const bodyParser = require("body-parser");

const config = require("../api/config");
const post = require('./components/post/network')
const errors = require('../api/network/errors')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/post', post)
app.use(errors);

app.listen(config.post.port, () => {
    console.log("Servicio post on port " + config.post.port);
});