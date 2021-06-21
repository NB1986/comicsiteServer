const express = require('express');
const contactRouter = express.Router();

contactRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the contact information to you');
})
.post((req, res) => {
    res.end('Will post submitted data entered in form');
})
.put((req, res) => {
    res.end('Will put submitted data entered in form');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /contactus');
});

module.exports = contactRouter;