const db = require('../config/database').connect();

const Produkter = function () { };

//CREATE

Produkter.createOne = function (navn, beskrivelse, pris, billede, kategori, brand) {
  
    return new Promise(async (resolve, reject) => {
        db.execute(`
        INSERT INTO produkt
        SET
            produkt.navn = ?,
            produkt.beskrivelse = ?,
            produkt.pris = ?,
            produkt.billede = ?,
            produkt.fk_kategori = ?,
            produkt.fk_brand = ?
        `, [navn, beskrivelse, pris, billede, kategori, brand], (err, result) => {
                if (err) reject(err);
                // console.log("TEST 1", result);
                resolve(true);
            })
    })
}


//READ
Produkter.getAll = function () {
    return new Promise((resolve, reject) => {
        db.execute(`
        SELECT 
            produkt.id,
            produkt.navn,
            produkt.beskrivelse,
            produkt.pris,
            produkt.billede,
            kategori.navn AS kategori,
            brand.navn AS brand
        FROM produkt
        INNER JOIN brand ON fk_brand = brand.id
        INNER JOIN kategori ON fk_kategori = kategori.id
        `,
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
    });
}

//UPDATE
Produkter.updateOne = function (id, brand, beskrivelse, pris, kategori, tilbudspris) {
    return new Promise((resolve, reject) => {
        db.execute(`
        UPDATE produkt 
        SET
            produkt.navn = ?,
            produkt.beskrivelse = ?,
            produkt.pris = ?,
            produkt.billede = ?,
            produkt.fk_kategori = ?,
            produkt.fk_brand = ?
        WHERE id = ?
        `, [navn, beskrivelse, pris, billede, kategori, brand, id ], (error, result) => { 
            /*:: HUSK FOR CHRIST SAKE at rækkefølgen i sql-kaldet skal være den samme som i sql'en.
            Fx havde jeg skrevet id før brand, så når kaldet når til WHERE id = ? har den ikke kunne finde
            noget fordi den tager det i den samme rækkefølge. Så id, til sidst så den passer på hvor id'ets sprøgsmålstegn er
             - altså ved WHERE (det er der id'et bliver nævnt). Det har ikke noget at side i forhold til rækkefølgen
             på argumenterne oppe i functionens parantes*/
                if (error) {
                    console.log(error);
                    reject(error)
                };
                resolve();
            });
    });
};

//DELETE
Produkter.deleteOne = function (id) {
    return new Promise((resolve, reject) => {
        db.execute('DELETE FROM produkt WHERE id = ?', [id], (error) => {
            if (error) reject(error);
            resolve();
        });
    });
};

Produkter.getKategorier = function () {

    return new Promise((resolve, reject) => {
        db.execute(`
        SELECT 
            id,
            navn
        FROM kategori`,
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
    });
}

Produkter.getProduktByKat = function (id) {
    return new Promise((resolve, reject) => {
        db.execute(`
        SELECT 
            produkt.id,
            produkt.navn,
            produkt.billede,
            produkt.beskrivelse,
            produkt.pris,
            produkt.fk_brand
        FROM produkt
        INNER JOIN brand ON fk_brand = brand.id
        WHERE fk_kategori = ?`, [id],
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
    });
};

Produkter.getOneById = function (id) {
    return new Promise((resolve, reject) => {
        db.execute(`
        SELECT 
            produkt.id,
            brand.navn AS brand,
            produkt.fk_brand,
            produkt.billede,
            produkt.beskrivelse,
            produkt.pris,
            kategori.navn AS kategori,
            produkt.fk_kategori
        FROM produkt
        INNER JOIN brand ON fk_brand = brand.id
        INNER JOIN kategori ON fk_kategori = kategori.id
        WHERE produkt.id = ?
        `, [id],
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
    });
}

Produkter.getBrand = function () {
    return new Promise((resolve, reject) => {
        db.execute(`
        SELECT
            brand.id,
            brand.navn
        FROM brand
        `, (error, result) => {
                if (error) reject(error);
                resolve(result);
            });
    });
};

module.exports = Produkter;