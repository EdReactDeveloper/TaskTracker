const mongoose = require('mongoose');

const { Schema } = mongoose;

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

Topic.methods.addItem = function(title, description) {
	const list = [ ...this.list ];

	list.push({ topicId: this._id, title, description, done: false });

	this.list = list;
	return this.save();
};

Topic.methods.moveItem = function(item) {
	const list = [ ...this.list ];
	const {done, description, title} = item
	list.push({ topicId: this._id, done, description, title });

	this.list = list;
	return this.save();
};

Topic.methods.checkListItem = function(listItemId) {
	const list = [ ...this.list ];
	const index = list.findIndex((item) => item._id.toString() === listItemId.toString());
	if (index < 0) {
		return { msg: 'item is not found' };
	}
	const updatedItem = !list[index].done;
	list[index].done = updatedItem;
	this.list = list;
	return this.save();
};

Topic.methods.editItem = function(title, desctiption, id) {
	const list = [ ...this.list ];
	const itemIndex = list.findIndex((item) => item._id.toString() === id.toString());
	list[itemIndex].title = title;
	list[itemIndex].description = desctiption;
	this.list = list;
	return this.save();
};

Topic.methods.removeItem = function(listItemId) {
	const list = [ ...this.list ];
	const index = list.findIndex((item) => item._id.toString() === listItemId.toString());
	if (index < 0) {
		return { msg: 'item is not found' };
	}
	list.splice(index, 1);
	this.list = list;
	return this.save();
};

module.exports = mongoose.model('Topic', Topic);
