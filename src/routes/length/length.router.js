const express = require('express');
const { httpGetLengthHandler, httpPostLengthHandler } = require('./length.handler');
const validateInput = require('../../middlewares/validateInput.middleware');
const validateUnits = require('../../middlewares/validateUnits.middleware');

const lengthRouter = express.Router();

lengthRouter.get('/', httpGetLengthHandler);

lengthRouter.post(
  '/',
  validateInput,
  validateUnits,
  httpPostLengthHandler);

module.exports = lengthRouter;