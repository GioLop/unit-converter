const validateUnits = (req, res, next) => {
  const { body: { ffrom, fto } } = req;
  if (ffrom === fto) {
    throw new Error('The units to convert should be different');
  }
  next();
};

module.exports = validateUnits;