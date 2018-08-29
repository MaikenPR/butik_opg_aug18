let produkt = require('../services/search')
const Produkter = require('../services/produkter');

module.exports = function (app) {
	app.get('/search', async (req, res) => {
		try{
            res.render('pages/searchResult', { 
                'page': { 'title': 'Søg' } });
        } catch(error){
            res.send(error);
        }
    });

    app.post('/search', async (req, res) => {
        // console.log('body: ', req.body)
        let txt = req.body.txt;
        let kategori = req.body.kategori;
        let pris = req.body.pris;
        let produkter = await produkt.search(txt, kategori, pris);
        const kategorier = await Produkter.getKategorier();
        console.log('route produkter: ', produkter);
        console.log(kategorier);
        res.render('pages/searchResult', { 
            'page': { 'title': 'Søg' },
            "produkter": produkter,
            "kategorier": kategorier,
        });
    });

};