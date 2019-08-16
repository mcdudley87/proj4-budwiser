const mongoose = require('mongoose');

const strainSchema = new mongoose.Schema ({
	name: String,
	comments: [{type: mongooseSchema.Types.ObjectId, ref: "Comment"}],
})

const Strain = mongoose.model('Strain', strainSchema)

module.exports = Strain;



