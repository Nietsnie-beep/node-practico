const express = require("express");

const config = require("./config");
const user = require('./components/user/network');

const app = express();

//routes
app.use('/api/user',user)

app.listen(config.api.port, () => {
    console.log("Server started on port " + config.api.port);
});

