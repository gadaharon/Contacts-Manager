const whitelist = ["http://localhost:3000"];
module.exports = function(req, res, next) {
  const origin = req.headers.origin;
  console.log(origin);
  if (whitelist.indexOf(origin) !== -1) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
};
