const db = require('../config/database').connect();


const KontaktForm = function () { };

/*Nedstående funktion "KontaktForm.getInfo" er til at hente kontakinformation på firmaet - i dette projekt eksisterer 
det pt ikke, heller ikke i databasen, men i tilfælde af det kommer, skal det oprettes en tabel det hedder kontaktInfo 
med de ønskede felter, som jo fx kunne være som nedstående, men det afhænger af opgavens information. Det kan være man
evt. skal skrive 'kontaktInfo.' foran de selectede feltnavne.*/

// KontaktForm.getInfo = function () {
//     return new Promise((resolve, reject) => {
//         db.execute(`
//         SELECT 
//             firmanavn,
//             adresse,
//             CONCAT(postnr, ' ', city) AS postnr,
//             telefon,
//             email
//         FROM kontaktInfo`,
//             (error, result) => {
//                 if (error) reject(error);
//                 resolve(result);
//             });
//     });
// };


KontaktForm.createMessage = function (navn, email, telefon, emne, besked) {

    return new Promise(async (resolve, reject) => {
        
        db.execute(`
        INSERT INTO kontaktform
        SET
            kontaktform.navn = ?,
            kontaktform.email = ?,
            kontaktform.telefon = ?,
            kontaktform.emne = ?,
            kontaktform.besked = ?
        `, [navn, email, telefon, emne, besked], (err, result) => {
                if (err) reject(err);
                // console.log("TEST 1", result);
                resolve(true);
            });
    });
};

module.exports = KontaktForm;
