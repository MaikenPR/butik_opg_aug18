const express = require('express');
const app = express();
const morgan = require('morgan');
const fileupload = require('express-fileupload');

const port = process.env.PORT || 3000;
app.set('port', port);

app.use(morgan('dev'));

// CONFIG
//==================================================
require('./config/views')(app, express);
require('./config/parsing')(app, fileupload);
require('./config/sessions')(app);


// ROUTES
//==================================================
require('./routes/allRoutes')(app);



app.listen(port);
console.log(`${port} is the magic port http://localhost:${port}/`);