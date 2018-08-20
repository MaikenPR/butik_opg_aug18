// const db = require('../config/database').connect();
const User = require('../services/users');
const Hash = require('../services/hash');


module.exports = function (app) {
	app.get('/login', (req, res) => {
		res.render('pages/login', { 'page': { 'title': 'Login' } });
	});

    /* Nedstående app.get('/hash/:password'...) bruges udelukkende til at hashe en kode, for at smide den direkte ind i databasen.
    For at hashe en kode skal man smide /hash/password op i URL'en - man skal selvfølgelig skrive det password man ønsker hashet,
    og ikke skrive 'password'*/
    
    app.get('/hash/:password', async (req, res) => {
        const hash = await Hash(req.params.password);
        console.log(hash);
		res.send();
	});

	app.post('/login', async (req, res) => {
		try {
			const valid = await User.valid(req.body.username, req.body.password);
			// valid ? res.send('EXCELSIOR!!') : res.send('sure sokker'); //ternery expression; en forkortet måde at skrive en if/else "betingelse ? true: false"
			if(valid){
				req.session.isLoggedIn = {id: valid};
				res.redirect('/admin_index');
			} else{
				req.session.isLoggedIn = false;
				res.send('sure sokker');
			}
		} catch (error) {
			res.send(error);
		}
	});
	

	app.get('/logout', (req, res) => {
		req.session.destroy((err) => {
			res.redirect('/');
		})
	})
};
