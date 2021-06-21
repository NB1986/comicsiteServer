const express = require('express');
const aboutRouter = express.Router();

aboutRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the about information to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /aboutus');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /aboutus');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /aboutus');
});

module.exports = aboutRouter;