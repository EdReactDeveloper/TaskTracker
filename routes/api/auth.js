const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');


router.post(
	'/register',
	[
		check('email', 'you should type a valid email address').isEmail(),
		check('password', 'you should make a password of min 6 chars').isLength({ min: 6 })
	],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.redirect('/singin');
			}
			const salt = await bcrypt.genSalt(10);
			const cryptedPassword = await bcrypt.hash(password, salt);
			user = new User({
				email,
				password: cryptedPassword,
				boards: []
			});

			user.save();
			return res.json(user);
		} catch (error) {
			console.log(error);
			res.status(400).json(error);
		}
		res.json(req.body);
	}
);


router.post(
	'/login',
	[
		check('email', 'enter a valid email').isEmail(),
		check('password', 'enter a valid password of min 6 chars').isLength({ min: 6 })
	],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log(errors);
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (!user) {
				console.log('wrong email');
				return res.status(404).json('wrong email');
			}
			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				console.log('wrong password');
				return res.status(400).json('wrong password');
			}

			req.session.user = user;
			req.session.isLoggedIn = true;
			req.session.save();

			return res.json(user);
		} catch (error) {
			res.status(400).json(error);
		}
	}
);


router.post('/logout', (req, res, next) => {
	req.session.destroy((err) => {
		console.log(err);
		return res.redirect('/');
	});
});

module.exports = router;
