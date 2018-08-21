const authenticate = require('../middleware/authenticate');
const db = require('../config/database').connect();
const Produkter = require('../services/produkter');

module.exports = function (app) {
    app.get('/admin_produkter', authenticate, async (req, res) => {
        try {
            const alleProdukter = await Produkter.getAll();
            const brand = await Produkter.getBrand();
            const kategorier = await Produkter.getKategorier();
            
            res.render('pages/admin_produkter', {
                'page': { 'title': 'Admin' },
                'produkter': alleProdukter,
                'brand': brand,
                'kategorier': kategorier
            });
        } catch (error) {
            // console.log('ER DER FORBINDELSE???');
            res.send(error);
        }
    });

    app.get('/admin_produkter/delete/:id', authenticate, async (req, res) => {
        const produktId = req.params.id;
        console.log(produktId);
        // res.send();
        try {
            // console.log("Kommer vi ind i try?");
            await Produkter.deleteOne(produktId);
            res.redirect('/admin_produkter');
        }
        catch (error) {
            res.send(error)
        };
    });

    app.post('/admin_produkter/opret', authenticate, async (req, res) => {
        console.log(req.body);
        const result = await Produkter.createOne(
            req.body.navn, 
            req.body.beskrivelse, 
            req.body.pris, 
            req.body.billede, 
            req.body.kategori, 
            req.body.brand
        ); /*Rækkefølgen på req.body.NOGET skal være den samme som angivet i servicens funktionsparametre */
        if(result === true){
            res.redirect('/admin_produkter');
        } else{
            res.send('Der skete en fejl');
        }
        res.end();
    });
};
