const express = require('express');
const comicRouter = express.Router();

comicRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the comics to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /comics');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /comics');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /comics');
});

comicRouter.route('/:comicId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the comic: ${req.params.comicId} to you`);
})
.post((req, res) => {
    res.end(`Will add your comment for /comics/${req.params.comicId}`);
})
.put((req, res) => {
    res.write(`Updating the comment for: ${req.params.comicId}\n`);
    res.end(`Will update the comment for: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting comment for: ${req.params.comicId}`);
});

module.exports = comicRouter;