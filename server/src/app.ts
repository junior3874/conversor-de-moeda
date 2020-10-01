const express = require("express");
const app = express();
const cors = require('cors');

import routes from './routes';


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4000)
