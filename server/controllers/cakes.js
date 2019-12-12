console.log("cakes.js is running")

const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const Rating = mongoose.model("Rating")

class CakeController{
	//methods like getall/create blah blah
	getAll(req, res){
		Cake.find({})
			.then(cakes => res.json(cakes))
			.catch(err => res.json(err))
	}

	create(req, res){
		const newcake = new Cake(req.body);
		newcake.save()
				.then(() => res.json({'msg': "はい, マスター"}))
				.catch( err => res.json(err));
	}

	getOne(req, res){

	}
}

module.exports = new CakeController();