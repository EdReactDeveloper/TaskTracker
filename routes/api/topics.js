const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Topic = require('../../models/Topics');

router.get('/:id', async (req, res, next) => {
	try {
		const result = await Topic.find({ boardId: req.params.id });
		return res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.post(
	'/create',
	[ check('title', 'should not be empty').not().isEmpty(), check('id', 'no id was passed').not().isEmpty() ],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.array() });
		}

		const { title, id } = req.body;
		let topic = await Topic.findById(id);
		try {
			if (!topic) {
				topic = new Topic({
					boardId: id,
					title,
					list: []
				});
			} else {
				topic.title = title;
			}
			await topic.save();
			console.log(topic);
			res.json(topic);
		} catch (error) {
			console.log(error);
			res.status(404).json({ msg: error });
		}
	}
);

router.post('/list/add/:id', async (req, res, next) => {
	const { title, description } = req.body;
	try {
		const topic = await Topic.findById(req.params.id);
		const result = await topic.addItem(title, description);
		return res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.post('/list/update/:id', async (req, res, next) => {
	const { listItemId } = req.body;
	try {
		const topic = await Topic.findById(req.params.id);
		const result = await topic.checkListItem(listItemId);
		res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.post('/list/remove/:id', async (req, res, next) => {
	const { listItemId } = req.body;
	try {
		const topic = await Topic.findById(req.params.id);
		const result = await topic.removeItem(listItemId);
		res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.delete('/remove/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const topic = await Topic.findById(id);
		await topic.remove();
		return res.json(id);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

module.exports = router;
