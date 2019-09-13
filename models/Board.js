const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Board = new Schema({
	boardTitle: {
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
		list:	[
			{		
				topicId: {type: Schema.Types.ObjectId, ref: 'List'},
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

Board.methods.addTopic = function(title, list){
	const topics = [...this.topics]
	topics.push(title, list)
}


module.exports = mongoose.model('Board', Board)

