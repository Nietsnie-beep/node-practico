exports.success = (req, res, message, status) => {
    let statusCode = status || 200;
    let statusMessage = status || "";

    res.status(status).send({
        error: false,
        status: status,
        body: message
    })
}

exports.error = (req, res, message, status) => {
    let statusCode = status || 500;
    let statusMessage = status || "Internal Server Error";

    res.status(statusCode).send({
        error: false,
        status: status,
        body: message
    })
}