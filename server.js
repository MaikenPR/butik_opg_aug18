const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);



// CONFIG
//==================================================
require('./config/views')(app, express);
require('./config/parsing')(app);
require('./config/sessions')(app);


// ROUTES
//==================================================
require('./routes/allRoutes')(app);



app.listen(port);
console.log(`${port} is the magic port http://localhost:${port}/`);