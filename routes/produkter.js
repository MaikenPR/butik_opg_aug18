const db = require('../config/database').connect();
const Produkter = require('../services/produkter');

module.exports = function (app) {
    app.get('/produkter', async (req, res) => {
        // console.log('Hej med dig');
        try {
            const alleProdukter = await Produkter.getAll();
            res.render('pages/produkter', {
                'page': { 'title': 'Produkter' },
                'produkter': alleProdukter
            });
            // res.send();
            // console.log(alleProdukter);

        } catch (error) {
            res.send(error);
        }
    });

    app.get('/produkter/:id', async (req, res) => {
        // console.log("Hej med dig");
        // try{
            const etProdukt = await Produkter.getOneById(req.params.id);
            res.render('pages/produktById', {
                'page': { 'title': 'etProdukt' },
                'etProdukt': etProdukt[0]
            });
            // res.send();
            // console.log(etProdukt);

        // } catch (error) {
        //     res.send(error);
        // }

    })
}