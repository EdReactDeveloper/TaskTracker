const express = require('express');
const router = express.Router();
const { check, validationResults } = require('express-validator');
const Profile = require('../../models/Profile');
const Boards = require('../../models/Boards');
const User = require('../../models/User'); 

router.post('/create', [ check('title', 'should no be empty').not().isEmpty() ], async (req, res, next) => {
	const profile = await Profile.findById({ user: req.session.user._id }).populate('user', [ 'email' ]);
});

router.get('/', async (req, res, next) => {

  try {
    const user = await User.findById(req.session.user._id).select('-password')
    
  } catch (error) {
    
  }


});

module.exports = router;
