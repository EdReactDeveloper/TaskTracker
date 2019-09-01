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


module.exports = mongoose.model('Board', Board)