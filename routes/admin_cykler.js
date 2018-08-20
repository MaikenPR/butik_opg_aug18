const authenticate = require('../middleware/authenticate');
const db = require('../config/database').connect();
const Produkter = require('../services/produkter');

module.exports = function (app) {
    app.get('/admin_cykler', authenticate, async (req, res) => {
        try {
            const alleCykler = await Cykel.getAll();
            const brand = await Cykel.getBrand();
            const cykel_kat = await Cykel.getKategorier();
            
            res.render('pages/admin_cykler', {
                'page': { 'title': 'Admin' },
                'alleCykler': alleCykler,
                'brand': brand,
                'cykel_kat': cykel_kat
            });
        } catch (error) {
            // console.log('ER DER FORBINDELSE???');
            res.send(error);
        }
    });

    app.get('/admin_cykler/delete/:id', authenticate, async (req, res) => {
        const cykelId = req.params.id;
        console.log(cykelId);
        // res.send();
        try {
            // console.log("Kommer vi ind i try?");
            await Cykel.deleteOne(cykelId);
            res.redirect('/admin_cykler');
        }
        catch (error) {
            res.send(error)
        };
    });

    app.post('/admin_cykler/opret', authenticate, async (req, res) => {
        console.log(req.body);
        const result = await Cykel.createOne(req.body.brand, req.body.billede, req.body.model, req.body.beskrivelse, req.body.pris, req.body.kategori, req.body.tilbudspris);
        if(result === true){
            res.redirect('/admin_cykler');
        } else{
            res.send('Der skete en fejl');
        }
        res.end();
    });
};
