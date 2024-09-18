const temperatureContext = {
  type: 'Temperature',
  units: ['Celsius', 'Fahrenheit', 'Kelvin'],
  formHandler: '/temperature',
  method: 'post'
};

const httpTemperatureGetHandler = (_, res) => {
  res.render('pages/form', temperatureContext);
};

const httpTemperaturePostHandler = (req, res) => {
  console.log(req.body);
  res.render('pages/result');
};

module.exports = {
  httpTemperatureGetHandler,
  httpTemperaturePostHandler
};