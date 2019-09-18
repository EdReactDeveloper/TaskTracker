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
	'/',
	[ check('title', 'should not be empty').not().isEmpty(), check('id', 'no board is found by id').not().isEmpty() ],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.array() });
		}
		const { title, id } = req.body;
		// 1. when we create a new topic we pass boardId as the id argument, 
		// thus there is no such topic id the if condition works for a new topic
		// 2.when we update an existing topic, we need to pass its id as the id argument  
		// thus the topic can be found and modified
		try {
			let topic = null;
		
				topic = await Topic.findById(id);
				if(topic){
					topic.title = title;
				}else{
				topic = new Topic({
					boardId: id,
					title,
					list: []
				});
			}		
			await topic.save();
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

router.post('/list/check/:id', async (req, res, next) => {
	const { payload } = req.body;
	try {
		const topic = await Topic.findById(req.params.id);

		const result = await topic.checkListItem(payload.itemId);

		res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.post('/list/edit/:id', async (req, res, next) => {
	const { payload: { itemTitle, itemDescription, itemId } } = req.body;
	try {
		const topic = await Topic.findById(req.params.id);

		const result = await topic.editItem(itemTitle, itemDescription, itemId);
		res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.post('/list/remove/:id', async (req, res, next) => {
	const { payload } = req.body;
	try {
		const topic = await Topic.findById(req.params.id);
		const result = await topic.removeItem(payload.itemId);
		res.json(result);
	} catch (error) {
		res.status(404).json({ msg: error });
	}
});

router.delete('/:id', async (req, res, next) => {
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
