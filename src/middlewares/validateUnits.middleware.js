const validateUnits = (req, res, next) => {
  const { body: { ffrom, fto } } = req;
  if (ffrom === fto) {
    throw new Error('same_units');
  }
  next();
};

module.exports = validateUnits;