//const bodyParser = require('body-parser');

const express = require('express');

const app = express();


require('./plugins/sqlquery');
require('./plugins/db');


app.listen(3000,() => {
  console.log('http://locahost:3000');
});
