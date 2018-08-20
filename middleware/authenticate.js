//Denne fil samt den mappe laves kun hvis man vil bruge authenticate

module.exports = function (req, res, next) {
    if (req.session && req.session.isLoggedIn) {
        return next();
    } else {
        res.redirect('/login');
    }
};