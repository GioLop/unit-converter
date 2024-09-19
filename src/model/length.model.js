const {
  MillimeterConverter,
  CentimeterConverter,
  MeterConverter,
  KilometerConverter,
  InchConverter,
  FootConverter,
  YardConverter,
  MileConverter
} = require("../converters/lenght.converter");

const transformMap = {
  mm: 'toMillimeter',
  cm: 'toCentimeter',
  m: 'toMeter',
  km: 'toKilometer',
  in: 'toInch',
  ft: 'toFoot',
  yd: 'toYard',
  mi: 'toMile'
};

const ClassMap = {
  mm: MillimeterConverter,
  cm: CentimeterConverter,
  m: MeterConverter,
  km: KilometerConverter,
  in: InchConverter,
  ft: FootConverter,
  yd: YardConverter,
  mi: MileConverter
};

const getLengthConversion = ({ fromValue, fromUnit, toUnit }) => {
  const converter = new ClassMap[fromUnit](fromValue);
  return converter[transformMap[toUnit]]();
};

module.exports = getLengthConversion;