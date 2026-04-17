const auth = (req, res, next) => {
  // simple placeholder middleware
  console.log("Auth middleware called");
  next();
};

module.exports = auth;
