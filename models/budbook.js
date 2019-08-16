const mongoose = require('mongoose');

const budbookSchema = new mongoose.Schema ({
	title: String, 
	description: String,
	strains: [{type: mongooseSchema.Types.ObjectId, ref: "Strain"}],
	notes: String
})

const List = mongoose.model('Budbook', budbookSchema)

module.exports = Budbook;

//Notes: .push to the budbooks. Always be an objectId. 

