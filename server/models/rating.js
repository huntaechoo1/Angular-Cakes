console.log("cake.js is running");
const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true,
		minlength: [2, "No anonymity"]
	},
	stars:{
		type: Number,
		required: true
	},
	comment:{
		type: String,
		required: true,
		minlength: [10]
	}
}, {timestamps : true});

mongoose.model("Rating", RatingSchema);

module.exports = RatingSchema;