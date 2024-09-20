const { CelsiusConverter } = require("../converters/temperature.converter");
const { GramConverter, KilogramConverter } = require("../converters/weight.converter");

const transformMap = {
  C: 'toCelsius',
  F: 'toFahrenheit',
  K: 'toKelvin',
};

const classMap = {
  C: CelsiusConverter,
  F: GramConverter,
  K: KilogramConverter,
};

module.exports = {
  transformMap,
  classMap,
};