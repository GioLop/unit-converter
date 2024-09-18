const express = require('express');
const { httpTemperatureGetHandler, httpTemperaturePostHandler } = require('./temperature.handler');

const temperatureRouter = express.Router();

temperatureRouter.get('/', httpTemperatureGetHandler);

temperatureRouter.post('/', httpTemperaturePostHandler);

module.exports = temperatureRouter;