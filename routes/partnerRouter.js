const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.put((req, res) => { // Update the partner info
    res.end(`Will update the partner: ${req.body.name} with description: ${req.body.description}`);
})
.post((req, res) => {   // Prevent adding a new partner on top of an existing on
    res.statusCode = 403;
    res.end(`POST operation not supported on partner`);
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send the partner to you`);
})
.put((req, res) => { // Update the partner info
    res.end(`Will update the partner: ${req.body.name} with description: ${req.body.description}`);
})
.post((req, res) => {   // Prevent adding a new partner on top of an existing on
    res.statusCode = 403;
    res.end(`POST operation not supported on partner`);
})
.delete((req, res) => {
    res.end(`Deleting partner`);
});

module.exports = partnerRouter;