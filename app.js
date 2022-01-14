const express = require('express')
const app = express()

const home = require('./routes/home');

app.use('/', home());

app.listen(3001)