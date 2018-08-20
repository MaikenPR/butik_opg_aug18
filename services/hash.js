const bcrypt = require('bcrypt');

const Hash = function (password) {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
};

Hash.compare = function (password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
};

module.exports = Hash;