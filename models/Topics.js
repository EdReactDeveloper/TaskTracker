const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Topic = new Schema({
	boardId: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
	title: { type: String, required: true },
	list: [
		{
			topicId: { type: Schema.Types.ObjectId, ref: 'Topic' },
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
});

module.exports = mongoose.model('Topic', Topic);
