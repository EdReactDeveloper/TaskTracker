const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profile = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  boards: [
    {type: Schema.Types.ObjectId, ref: 'Board'}
  ]
})

module.exports = mongoose.model('Profile', Profile)