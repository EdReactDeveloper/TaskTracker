const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Board = require('../../models/Board');
const User = require('../../models/User');
const Topics = require('../../models/Topics');

router.get('/', async (req, res, next) => {
	try {
		const boards = await Board.find({ userId: req.session.user._id });
		res.json(boards);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.post('/add', [ check('boardTitle', 'title is missing').not().isEmpty() ], async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { boardTitle, id } = req.body;
	try {
		const user = await User.findById(req.session.user._id).select('-password');
		if (!user) {
			return res.status(404).json({ msg: 'you need to authorize' });
		}
		let board = null
		if(id){
			board = await Board.findById(id)
			board.boardTitle = boardTitle
		}else {
			const newBoard = new Board({
				boardTitle,
				userId: req.session.user._id,
				topics: []
			});
			board = newBoard
		}

		const result = await board.save();
		res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.delete('/remove/:id', async (req, res, next) => {
	try {
		await Topics.deleteMany({ boardId: req.params.id });
		await Board.findByIdAndRemove(req.params.id);
		res.json(req.params.id);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

module.exports = router;
