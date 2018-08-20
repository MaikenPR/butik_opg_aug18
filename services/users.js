const db = require('../config/database').connect();
const Hash = require('./hash');

//Definerer User
const User = function () {};

// CREATE - Opretter en user

User.createUser = function(username, password){
    return new Promise(async (resolve, reject) => {
        const hash = await Hash(password);
        db.execute('INSERT INTO users SET username = ?, password = ?', [username, hash], (err, result) => {
            if (err) reject(err);
            console.log(result);
            resolve(true);
        });
    });
};

//READ - henter/viser en bruger
User.getOne = function (id) {
    return new Promise((resolve, reject) => {
        db.execute('SELECT username FROM users WHERE id = ?', [id], (error, result) => {
            if (error) reject(error);
            resolve(result[0].username);
        });
    });
};

//READ - henter/viser en bruger
// User.getHash = function () {
//     return new Promise((resolve, reject) => {
//         const hash = await Hash(1234);
//         console.log(hash);
//     });
// };

//UPDATE - Updaterer password 
User.update = function (id, password) {
    return new Promise(async (resolve, reject) => {
        const hash = await Hash(password);
        db.execute('UPDATE users SET password = ? WHERE id = ?', [hash, id], (error) => {
            if (error) reject(error);
            resolve();
        });
    });
};

//DELETE - Sletter en bruger
User.deleteOne = function (id) {
    return new Promise((resolve, reject) => {
        db.execute('DELETE FROM users WHERE id = ?', [id], (error, result) => {
            if (error) reject(error);
            resolve();
        });
    });
};

//tjekker om brugernavn og adgangskode er korrekt
User.valid = function (username, password) {
    return new Promise((resolve, reject) => {
        db.execute('SELECT id, password FROM users WHERE username = ?', [username], async (err, result) => {
            if (err) reject(err);
            if (result[0] === undefined) reject('invalid stuffs');
            if (await Hash.compare(password, result[0].password)) {
                resolve(result[0].id);
            } else {
                reject('invalid password or username');
            }
        });
    });
};

module.exports = User;