const url = require('url'); 

const errorHandler = (err, req, res, next) => {
  if (err) {
    const { message } = err;
    
    res.redirect(url.format({
      pathname:"/error",
      query: {
        from: req.url.replace('/', ''),
        error: message
      }
    }));
    next();
  }
  next();
};

module.exports = errorHandler;