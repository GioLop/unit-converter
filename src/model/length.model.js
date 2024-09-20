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

const classMap = {
  mm: MillimeterConverter,
  cm: CentimeterConverter,
  m: MeterConverter,
  km: KilometerConverter,
  in: InchConverter,
  ft: FootConverter,
  yd: YardConverter,
  mi: MileConverter
};


module.exports = {
  transformMap,
  classMap,
};