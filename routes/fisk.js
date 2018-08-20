
/*Hvis jeg blot vil kunen skrive en værdig som id i URL'en uden brug af databasen er den sådan her det skrives */

module.exports = function (app) {
	app.get('/fisk/:id', async (req, res) => {
		try{
            res.render('pages/fisk', { 
                'page': { 'title': 'Fisk' }, 
                'id': req.params.id });
        } catch(error){
            res.send(error);
        }
    });
};



/* I tilfælde af at jeg vil bruge databasen er det følgende kode der skal bruges.

*De rigtige filer skal requires, her databasen og servicen cykler:*/

// const db = require('../config/database').connect();
// const Cykel = require('../services/cykler');

/*I routet skal der efterfølgende tilføjes en henvisning til den function der laver databasekaldet i servicen cykler - 
her(ligges den i en variabel først): 'const enCykel = await Cykel.getOneById(req.params.id)', samt denne const skal 
bruges/kaldes inde i res.render: 'enCykel': enCykel[0]*/

// module.exports = function (app) {
// 	app.get('/fisk/:id', async (req, res) => {
// 		try{
//             const enCykel = await Cykel.getOneById(req.params.id);
//             res.render('pages/fisk', { 
//                 'page': { 'title': 'Fisk' }, 
//                 'id': req.params.id,
//                 'enCykel': enCykel[0] });
//         } catch(error){
//             res.send(error);
//         }
//     });
// };

/*Hvis jeg vil have udskrevet andre ting fra databasen, skal jeg se i Funktionen der laver databasekaldet i servicen, 
for at se hvilke andre muligheder den nævner. Det kunne fx også være beskrive eller pris. Der er forsat den samme funktion der bruges
'Cykel.getOneById' men inde i mit view/page skal det nævnes. */