const {
  MilligramConverter,
  GramConverter,
  KilogramConverter,
  OunceConverter,
  PoundConverter
} = require("../converters/weight.converter");

const transformMap = {
  ml: 'toMilligram',
  g: 'toGram',
  kg: 'toKilogram',
  oz: 'toOunce',
  lb: 'toPound',
};

const classMap = {
  ml: MilligramConverter,
  g: GramConverter,
  kg: KilogramConverter,
  oz: OunceConverter,
  lb: PoundConverter,
};

module.exports = {
  transformMap,
  classMap,
};