const express = require('express');

const router = express.Router();
const Topic = require('../../models/Topics');

router.get(`/`, async (req, res) => {
	try {
		const input = req.query.query;
		const topics = await Topic.find();
		const result = [];
		for (let topic of topics) {
			if (
				topic.title.toLowerCase().split(' ').indexOf(input.toLowerCase()) > -1) {
				result.push(topic);
			}
			search(topic, input, result);
		}
		res.json(result);
	} catch (error) {
		res.status(404).json({ errors: [ { msg: error } ] });
	}
});

function search(object, input, result) {
	if ((object.list && object.list.length < 1) || typeof object.list === 'undefined') {
		return;
	}
	object.list.forEach((item) => {
		if (item.title === input) {
			result.push(item);
		}

		search(item, input, result);
	});

	return result;
}

module.exports = router;
