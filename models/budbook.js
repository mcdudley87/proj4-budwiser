const mongoose = require('mongoose');

const budbookSchema = new mongoose.Schema ({
	title: String, 
	desc: String,
	notes: String,
	strains: [{type: mongoose.Schema.Types.ObjectId, ref: "Strain"}],
})

const Budbook = mongoose.model('Budbook', budbookSchema)

module.exports = Budbook;

//Notes: .push to the budbooks. Always be an objectId. 

