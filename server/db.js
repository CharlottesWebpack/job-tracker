var mongoose = require("mongoose");
// var config = require("../config.js");

var USER = process.env.DB_USER;
var PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb://greenfield:jobs@ds115738.mlab.com:15738/charlottes_webpack`);

module.exports = mongoose.connection;
