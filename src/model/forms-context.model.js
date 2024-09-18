const lenghtFormContext = {
  type: 'Length',
  units: ['Millimeter', 'Centimeter', 'Meter', 'Kilometer', 'Inch', 'Foot', 'Yard', 'Mile'],
  formHandler: '/length',
  method: 'post'
};

const temperatureFormContext = {
  type: 'Temperature',
  units: ['Celsius', 'Fahrenheit', 'Kelvin'],
  formHandler: '/temperature',
  method: 'post'
};

const weightFormContext = {
  type: 'Weight',
  units: ['Milligram', 'Gram', 'Kilogram', 'Ounce', 'Pound'],
  formHandler: '/weight',
  method: 'post'
};

module.exports = {
  lenghtFormContext,
  temperatureFormContext,
  weightFormContext
};