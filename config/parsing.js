const bodyParser = require('body-parser');

module.exports = (app, fileupload) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ 'extended': true }));
	app.use(fileupload()); // Kan evt. ligges i ny fil
};
