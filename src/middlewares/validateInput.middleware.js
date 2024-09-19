const validateInput = (req, res, next) => {
  const { body: { fvalue } } = req;
  
  if (isNaN(fvalue)) {
    throw new Error('The value to convert should be a number');
  }
  next();
}

module.exports = validateInput;