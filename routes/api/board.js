const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Board = require('../../models/Board');
const User = require('../../models/User');
const Topics = require('../../models/Topics');

router.get('/', async (req, res) => {
	try {
		const boards = await Board.find({ userId: req.session.user._id });
		res.json(boards);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.post('/', [ check('title', 'title is missing').not().isEmpty() ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { title, id } = req.body;
	try {
		const user = await User.findById(req.session.user._id).select('-password');
		if (!user) {
			return res.status(404).json({ msg: 'you need to authorize' });
		}
		let board = null
		if(id){
			board = await Board.findById(id)
			board.title = title
		}else {
			board = new Board({
				title,
				userId: req.session.user._id,
				topics: []
			});
		}

		const result = await board.save();
		return res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await Topics.deleteMany({ boardId: req.params.id });
		await Board.findByIdAndRemove(req.params.id);
		res.json(req.params.id);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

module.exports = router;
