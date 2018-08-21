const authenticate = require('../middleware/authenticate');
const db = require('../config/database').connect();
const Produkter = require('../services/produkter');

module.exports = function (app) {

// READ - hent produkt
    app.get('/admin_retProdukt/:id', authenticate, async (req, res) => {
        try {
            const brand = await Produkter.getBrand();
            const kategorier = await Produkter.getKategorier();
            const etProdukt = await Produkter.getOneById(req.params.id);
            console.log(etProdukt[0]);
            res.render('pages/admin_retProdukt', {
                'page': { 'title': 'Admin' },
                'etProdukt': etProdukt[0],
                'brand': brand,
                'kategorier': kategorier
            });
        } catch (error) {
            res.send(error);
        }
    });

    // UPDATE - Redigerer et produkt
    app.post('/admin_retProdukt/update/:id', authenticate, async (req, res) => {
        // try{
            console.log(req.body);
            let status = await Produkter.updateOne(
                req.params.id, 
                req.body.navn, 
                req.body.brand, 
                req.body.beskrivelse, 
                req.body.pris, 
                req.body.kategori);
            if(status === true){
                //Alt OK
                res.redirect('/admin_produkter'); 
            } else {
                //Fejl
                res.send('Der er sket en fejl');
            }
            // console.log("redirect");
            // res.send();
        // } catch(error){
        // };
        /*Hvis det driller, så prøv at slukke try/catch fordi den forhindre os i at se fejlbeskeder. Erstat med en if/else som ovenfor. Til det 
        er await Produkter.updateOne() lagt i variablen status. Status kaldes over i produker.js under Produkter.updateOne nederst i resolve(true)*/
    });
};
