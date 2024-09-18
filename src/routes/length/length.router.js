const express = require('express');
const { httpGetLengthHandler, httpPostLengthHandler } = require('./length.handler');

const lengthRouter = express.Router();

lengthRouter.get('/', httpGetLengthHandler);

lengthRouter.post('/', httpPostLengthHandler);

module.exports = lengthRouter;