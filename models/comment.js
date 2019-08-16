const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
	title: String,
	body: String 
})

const Strain = mongoose.model('Comment', commentSchema)

module.exports = Comment;



