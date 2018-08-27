//Denne fil samt den mappe laves kun hvis man vil bruge authenticate

module.exports = function (req, res, next) {
    // next(); return; // Tænd dette for at gå udenom Authenticate og gå direkte på adminsiderne uden at skulle logge ind hele tiden
    if (req.session && req.session.isLoggedIn) {
        return next();
    } else {
        res.redirect('/login');
    }
};