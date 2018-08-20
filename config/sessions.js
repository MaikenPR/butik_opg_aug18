const session = require('express-session');


module.exports = async function (app) {
		app.use(session({
			'resave': false,
			'saveUninitialized': true,
			'secret': 'default secret'
		}));
	
};
