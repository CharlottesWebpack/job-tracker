var mongoose = require("mongoose");
var config = require("../config.js");

var USER = process.env.DB_USER || config.db.user;
var PASSWORD = process.env.DB_PASSWORD || config.db.password;

mongoose.connect(`mongodb://${USER}:${PASSWORD}@ds115738.mlab.com:15738/charlottes_webpack`);

module.exports = mongoose.connection;