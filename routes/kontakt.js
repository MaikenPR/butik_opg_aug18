const db = require('../config/database').connect();
const KontaktForm = require('../services/kontakt');


module.exports = function (app) {
    app.get('/kontaktForm', async (req, res) => {
        try {
            res.render('pages/kontakt', {
                'page': { 'title': 'Kontakt' },
                'successMessage': ""
            });
        } catch (error) {
            res.send(error);
        }
    });

    app.post('/kontaktForm', async (req, res) => {
        console.log("ROUTE", req.body);
        const result = await KontaktForm.createMessage(
            req.body.navn,
            req.body.email,
            req.body.telefon,
            req.body.emne,
            req.body.besked
        ); /*Rækkefølgen på req.body.NOGET skal være den samme som angivet i servicens funktionsparametre */
        if (result === true) {
            res.render('pages/kontakt', {
                'page': { 'title': 'Kontakt' },
                'successMessage': "Tak for din besked"
            });
        } else {
            res.send('Der skete en fejl');
        }
        res.end();
    });
};
