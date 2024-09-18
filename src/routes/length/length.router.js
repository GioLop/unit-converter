const express = require('express');
const { httpGetLengthHandler } = require('./length.handler');

const lengthRouter = express.Router();

lengthRouter.get('/', httpGetLengthHandler);

module.exports = lengthRouter;