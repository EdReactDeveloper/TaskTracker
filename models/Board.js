const mongoose = require('mongoose');

const { Schema } = mongoose;

const Board = new Schema({
	title: {
		type: String,
		required: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	topics: [
		{
			title: {
				type: String
			},
			list: [
				{
					topicId: { type: Schema.Types.ObjectId, ref: 'List' },
					title: {
						type: String,
						required: true
					},
					description: {
						type: String
					},
					done: {
						type: Boolean,
						require: true
					}
				}
			]
		}
	]
});

module.exports = mongoose.model('Board', Board);
