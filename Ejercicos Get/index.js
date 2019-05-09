const express = require('express');
const config = require('./config');
const endopoints = require('./endpoints');
const app = express();
const port = 3000;

config.setup(app);
endopoints.routes(app);

app.listen(port, () => console.log('server running'));