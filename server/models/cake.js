console.log("cake.js is running");
const mongoose = require("mongoose");
const RatingSchema = require("./rating");

const CakeSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true,
		minlength: [2, "Your cake cannot be a lie"]
	},
	creator:{
		type: String,
		required: true,
		minlength: [2, "You must have a maker"]
	},
	image:{
		type: String
	},
	ratings: [ RatingSchema ]
}, {timestamps : true});

mongoose.model("Cake", CakeSchema);