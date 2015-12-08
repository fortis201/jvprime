var mongoose = require('mongoose');
//for assiciation:
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: String
})

mongoose.model('User', userSchema);