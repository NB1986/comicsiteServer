const express = require('express');
const otherProductRouter = express.Router();

otherProductRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the other products to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /otherproducts');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /otherProducts');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation is not supported on /otherProducts');
});

otherProductRouter.route('/:productCategory')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the product: ${req.params.productCategory} to you`);
})
.post((req, res) => {
    res.end(`Will add your comment for /otherproducts/${req.params.productCategory}`);
})
.put((req, res) => {
    res.write(`Updating the comment for: ${req.params.productCategory}\n`);
    res.end(`Will update the comment for: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting comment for: ${req.params.productCategory}`);
});

module.exports = otherProductRouter;