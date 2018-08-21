const authenticate = require('../middleware/authenticate');
const db = require('../config/database').connect();

module.exports = function (app) {
	app.get('/admin_index', authenticate, async (req, res) => {
		try{
             res.render('pages/admin_index', {
                'page': { 'title': 'Admin' },
            });
        } catch(error){
            res.send(error);
        }
    });
};

