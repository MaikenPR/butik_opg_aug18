const db = require('../config/database').connect();

module.exports = {

    search: function (txt, kategori = [], pris) {
        txt = txt == '' ? '_' : txt;
        
        if (kategori.length == 0) {
            for (i = 0; i < 10; i++)kategori.push(i);
        }
        pris = (pris == '' || isNaN(pris))? 1000000 : pris;

        console.log('service: ', 'txt=', txt, 'kategori=', kategori, 'pris=', pris)
        return new Promise((resolve, reject) => {
            let prepare = ['%' + txt + '%', kategori, pris]
            var sql = `
                SELECT
                    produkt.id,
                    produkt.navn,
                    produkt.billede,
                    produkt.pris,
                    kategori.navn AS kategori
                FROM produkt
                INNER JOIN kategori ON fk_kategori = kategori.id
                WHERE produkt.navn like ? and
                produkt.fk_kategori in (?) and
                produkt.pris <= ?
            `;
            db.query(sql, prepare, function (err, result) {
                if (err) reject('fejl');
                resolve(result);
            });
        });
    }




}