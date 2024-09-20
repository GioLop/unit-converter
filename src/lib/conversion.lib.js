const getConversion = ({
  fromValue,
  fromUnit,
  toUnit,
  classMap,
  transformMap
}) => {
  const converter = new classMap[fromUnit](fromValue);
  return converter[transformMap[toUnit]]();
};

module.exports = {
  getConversion
};