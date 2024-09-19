const lenghtFormContext = {
  type: 'Length',
  units: [
    { name: 'Millimeter', abbreviation: 'mm' },
    { name: 'Centimeter', abbreviation: 'cm' },
    { name: 'Meter', abbreviation: 'm' },
    { name: 'Kilometer', abbreviation: 'km' },
    { name: 'Inch', abbreviation: 'in' },
    { name: 'Foot', abbreviation: 'ft' },
    { name: 'Yard', abbreviation: 'yd' },
    { name: 'Mile', abbreviation: 'mi' }
  ],
  formHandler: '/length',
  method: 'post'
};

const temperatureFormContext = {
  type: 'Temperature',
  units: [
    { name: 'Celsius', abbreviation: '°C' },
    { name: 'Fahrenheit', abbreviation: '°F' },
    { name: 'Kelvin', abbreviation: '°K' }
  ],
  formHandler: '/temperature',
  method: 'post'
};

const weightFormContext = {
  type: 'Weight',
  units: [
    { name: 'Milligram', abbreviation: 'ml' },
    { name: 'Gram', abbreviation: 'g' },
    { name: 'Kilogram', abbreviation: 'kg' },
    { name: 'Ounce', abbreviation: 'oz' },
    { name: 'Pound', abbreviation: 'lb' }
  ],
  formHandler: '/weight',
  method: 'post'
};

module.exports = {
  lenghtFormContext,
  temperatureFormContext,
  weightFormContext
};