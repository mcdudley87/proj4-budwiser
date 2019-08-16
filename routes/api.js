const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Budbook = require('../models/budbook');
const Strain = require('../models/strain');
const Comment = require('../models/comment');

//====THESE ARE THE BUDBOOK ROUTES===//

// GET all budbooks associated with user
router.get('/users/:id', (req, res) => {
	User.findById(req.params.id).populate('budbooks').exec( (err, user) => {
		if (err) res.json(err)
		res.json(user)
	})
})

// GET one budbook associated with user
router.get('/budbooks/:id', (req, res) => {
	Budbook.findById(req.params.id).populate('strains').exec( (err, budbook) => {
		if (err) res.json(err)
		res.json(budbook)
	})
})

// POST a budbook
router.post('/:id/budbooks', (req, res) => {
	User.findById(req.params.id, (err, user) => {
		let newBudbook = new Budbook({
			title: req.body.title,
			desc: req.body.desc,
		})
		newBudbook.save( (err, budbook) => {
			user.budbooks.push(budbook)
			user.save()
			if (err) res.json(err)
			res.json(budbook)
		})
	})
}

// UPDATE budbook name
router.post('/budbooks', (req, res) => {
	let id = req.body.budbookId
	Budbook.findOneAndUpdate({_id: id}, {
		title: req.body.budbookTitle,
	}, {
		new: true
	}, (err, budbook) => {
		if (err) res.json(err)
		res.json(list)
	});
})

// DELETE a budbook


//====THESE ARE THE STRAIN ROUTES====//

// POST a strain to a user's budbook


//====THESE ARE THE COMMENT ROUTES====//






router.get('/', (req, res) => {
	res.json({type: 'success', message: 'you accessed the protected api routes.'});
});

module.exports = router;