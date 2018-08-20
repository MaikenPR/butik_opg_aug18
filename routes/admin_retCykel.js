const authenticate = require('../middleware/authenticate');
const db = require('../config/database').connect();
const Produkter = require('../services/produkter');

module.exports = function (app) {

// READ - hent cykel
    app.get('/admin_retCykel/:id', authenticate, async (req, res) => {
        try {
            const brand = await Cykel.getBrand();
            const cykel_kat = await Cykel.getKategorier();
            const enCykel = await Cykel.getOneById(req.params.id);
            // console.log(enCykel[0].model);
            res.render('pages/admin_retCykel', {
                'page': { 'title': 'Admin' },
                'enCykel': enCykel[0],
                'brand': brand,
                'cykel_kat': cykel_kat
            });
        } catch (error) {
            res.send(error);
        }
    });

    // UPDATE - Redigerer en cykel
    app.post('/admin_retCykel/update/:id', authenticate, async (req, res) => {
        try{
            console.log(req.body);
            await Cykel.updateOne(req.params.id, req.body.brand, req.body.model, req.body.beskrivelse, req.body.pris, req.body.kategori, req.body.tilbudspris);
            res.redirect('/admin_cykler');     
        } catch(error){
            res.send('Der er sket en fejl');
        };
    });
};
