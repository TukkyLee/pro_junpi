var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var user = {
	username:String,
	password:String,
}

var model = mongoose.model("user",new Schema(user));

module.exports = model;