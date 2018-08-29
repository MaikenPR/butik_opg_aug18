const authenticate = require('../middleware/authenticate');
const db = require('../config/database').connect();
const Produkter = require('../services/produkter');
const path = require('path');

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
        console.log(req.files);
        //=========================================================
        // grib det billede der er sendt med
        let billedeFil = req.files.billedeFil;
        // tjek om billedet rent faktisk ER sendt med
        if (billedeFil == undefined) {
            res.json({
                'status': 400,
                'error': 'Billedet blev ikke modtaget.'
            });
        } else {
            // definer hvor billedet skal placeres, og hvilket navn det skal have
            // her burde der tjekkes om billede navnet allerede eksistere!
            let upload_location = path.join(__dirname, '..', 'public/images', billedeFil.name);
            // benyt den express-fileuplod funktionen mv() til at flytte billedet
            billedeFil.mv(upload_location, (err) => {
                if (err) {
                    console.log(err);
                    //To Do: Skal forbedre denne fejlhåndtering
                    // render() evt. siden med fejlbesked i stedet for send()
                    res.send(err);
                }

            });
        }
        //}
        //=========================================================
        const result = await Produkter.createOne(
            req.body.navn, 
            req.body.beskrivelse, 
            req.body.pris, 
            req.files.billedeFil.name, 
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
