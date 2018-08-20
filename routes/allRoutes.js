module.exports = function (app){
    require('./index')(app);
    require('./produkter')(app);
    require('./admin_index')(app);
    require('./admin_cykler')(app);
    require('./admin_retCykel')(app);
    require('./login')(app);
    require('./fisk')(app);
};