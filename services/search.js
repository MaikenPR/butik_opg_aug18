const db = require('../config/database').connect();

module.exports = {

    search: function (txt) {
        txt = txt == '' ? '_' : txt;
        
        console.log('service: ', 'txt=', txt)
        return new Promise((resolve, reject) => {
            let prepare = ['%' + txt + '%']
            var sql = `
                SELECT
                    produkt.id,
                    produkt.navn,
                    produkt.billede,
                    kategori.navn AS kategori
                FROM produkt
                INNER JOIN kategori ON fk_kategori = kategori.id
                WHERE produkt.navn like ?
            `;
            db.query(sql, prepare, function (err, result) {
                if (err) reject('fejl');
                resolve(result);
            });
        });
    }




}