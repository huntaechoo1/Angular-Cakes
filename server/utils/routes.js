console.log("route.js is running")
const Cake = require("../controllers/cakes")

module.exports = function(app){
	app.get('/cakes', Cake.getAll);
	app.post('/cakes', Cake.create);
}