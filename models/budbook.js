const mongoose = require('mongoose');

const budbookSchema = new mongoose.Schema ({
	title: String, 
	description: String,
	strains: [{type: mongooseSchema.Types.ObjectId, ref: "Strain"}],
})

const List = mongoose.model('Budbook', budbookSchema)

module.exports = Budbook;


