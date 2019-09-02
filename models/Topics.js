const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid')

const Topic = new Schema({
	boardId: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
	title: { type: String, required: true },
	list: [
		{
			topicId: { type: Schema.Types.ObjectId, ref: 'Topic' },
			id: {
				type: String, 
				required: true
			},
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

Topic.methods.addItem = function(title, description){
	const list = [...this.list]

	list.push({topicId: this._id, id:uuid.v4(), title, description, done: false})

	this.list = list
	return this.save()
}

module.exports = mongoose.model('Topic', Topic);
