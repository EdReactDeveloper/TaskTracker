const express = require('express');

const router = express.Router();
const Topic = require('../../models/Topics');

router.get(`/`, async (req, res) => {
	try {
		const input = req.query.query;
		const topics = await Topic.find();
		const result = [];
		const regex = new RegExp(input)
		for (let topic of topics) {
			if (regex.test(topic.title.toLowerCase())){
				result.push(topic);
			}
			search(topic, input, result);
		}
		res.json({result, input});
	} catch (error) {
		res.status(404).json({ errors: [ { msg: error } ] });
	}
});

function search(object, input, result) {
	const regexp = new RegExp(input)
	if ((object.list && object.list.length < 1) || typeof object.list === 'undefined') {
		return;
	}
	object.list.forEach((item) => {
		if (regexp.test(item.title)) {
			result.push(item);
		}

		search(item, input, result);
	});

	return result;
}

module.exports = router;
