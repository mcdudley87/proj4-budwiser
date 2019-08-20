const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Budbook = require('../models/budbook');
const Strain = require('../models/strain');

//====THESE ARE THE BUDBOOK ROUTES===//
// GET all budbooks associated with user
// get /budbooks
router.get('/budbooks', (req, res) => {
	console.log("We are hitting the GET ALL BUDBOOKS route")
	console.log("This is the USER:", req.user)
	User.findById(req.user._id).populate('budbooks').exec( (err, user) => {
		if (err) res.json(err)
		res.json(user)
	})
})

// GET one budbook associated with user
router.get('/budbooks/:id', (req, res) => {
	Budbook.findById(req.params.id).populate('strains').exec( (err, budbook) => {
		if (err) {
			res.json(err)
		} else {
			res.json(budbook)
		}
	})
})

// POST a budbook
// POST /budbooks
router.post('/budbooks', (req, res) => {
	console.log("This is supposed to be the user:", req.user);
	User.findById(req.user._id, (err, user) => {
		let newBudbook = new Budbook({
			title: req.body.title,
			desc: req.body.desc,
			notes: req.body.notes,
		})
		newBudbook.save( (err, budbook) => {
			user.budbooks.push(budbook)
			user.save()
			if (err) res.json(err)
			res.json(budbook)
		})
	})
})

// UPDATE budbook name
router.put('/budbooks', (req, res) => {
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
router.delete('/budbooks/:bid', (req, res) => {
	User.findById(req.user._id, (err, user) => {
		user.budbooks.pull(req.params.bid)
		user.save(err => {
			if (err) res.json(err)
			Budbook.findByIdAndDelete(req.params.bid, (err) => {
				if (err) res.json(err)
				res.json(user)
			})
		})
	})
})

//====THESE ARE THE STRAIN ROUTES====//
// POST a strain to a user's budbook
router.post('/budbooks/:id/strains', (req, res) => {
	Budbook.findById(req.params.id, (err, list) => {
		let newStrain = new Strain({
			name: req.body.name,
		})
		newStrain.save( (err, strain) => {
			budbook.strains.push(strain)
			budbook.save( (err, list) => {
				if (err) res.json(err)
				res.json(list)
			})
		})
	})
})




// router.get('/', (req, res) => {
// 	res.json({type: 'success', message: 'you accessed the protected api routes.'});
// });

module.exports = router;