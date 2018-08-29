module.exports = function (app){
    require('./index')(app);
    require('./produkter')(app);
    require('./admin_index')(app);
    require('./admin_produkter')(app);
    require('./admin_retProdukt')(app);
    require('./login')(app);
    require('./kontakt')(app);
    require('./search')(app);
};