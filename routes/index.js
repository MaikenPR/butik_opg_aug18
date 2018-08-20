const db = require('../config/database').connect();


module.exports = function (app) {
	app.get('/', async (req, res) => {
		try{
            res.render('pages/index', { 
                'page': { 'title': 'Forside' } });
        } catch(error){
            res.send(error);
        }
    });
};

//Jeg havde lavet et tilbud-route men man kan ikke lave et route til en partial