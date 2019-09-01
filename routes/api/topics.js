const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Topic = require('../../models/Topics');

router.get('/:id', async (req, res, next) => {
	try {
		const result = await Topic.find({ boardId: req.params.id });
		return res.json(result);
	} catch (error) {
    res.status(404).json({msg: error})   
	}
});

router.post('/create', [ 
  check('title', 'should not be empty').not().isEmpty(),
  check('id', 'no id was passed').not().isEmpty(),

], async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() });
	}

	const { title, id } = req.body;

	try {
		const topic = new Topic({
			boardId: id,
			title,
			list: []
		});

		await topic.save();
		res.json(topic);
	} catch (error) {
    console.log(error)
    res.status(404).json({msg: error})    
  }
});

module.exports = router;
