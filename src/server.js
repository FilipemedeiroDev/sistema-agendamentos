require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Loaders =  require('./loaders');
const routes = require('./routes');

Loaders.start();

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes)

app.listen(process.env.PORT || 3001, () => console.log('Server is runnig'))