const db = require('../config/database').connect();

const Kontakt = function () {
    return new Promise((resolve, reject) => {
        db.execute(`
        SELECT 
            firmanavn,
            adresse,
            CONCAT(postnr, ' ', city) AS postnr,
            telefon,
            email
        FROM kontakt`,
            (error, result) => {
                if(error) reject(error);
                resolve(result);
            });
    });
};

module.exports = Kontakt;