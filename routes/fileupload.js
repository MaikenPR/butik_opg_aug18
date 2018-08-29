const path = require('path');

module.exports = (app) => {
    app.get('/imageForm', (req, res)=>{
        res.render('pages/imageForm'); // Hent evt. billederne til visning på siden
    });

    app.post('/image', (req, res) => {
        console.log("pølse");
        // grib det billede der er sendt med
        let billede = req.files.billede;
        // tjek om billedet rent faktisk ER sendt med
        if (billede == undefined) {
            res.json({
                'status': 400,
                'error': 'Billedet blev ikke modtaget.'
            });
        } else {
            // definer hvor billedet skal placeres, og hvilket navn det skal have
            // her burde der tjekkes om billede navnet allerede eksistere!
            let upload_location = path.join(__dirname, '..', 'public/images', billede.name);
            // benyt den express-fileuplod funktionen mv() til at flytte billedet
            billede.mv(upload_location, (err) => {
                if (err) {
                    console.log(err);
                    // render() evt. siden med fejlbesked i stedet for send()
                    res.send(err);
                }
                // husk at skrive til DB
                res.render('pages/imageForm',{
                    'upload': 'success',
                    'name': billede.name
                });
            });
        }
        //}
    });

}