const express = require("express");
const app = express();
const cors = require('cors');

import routes from './routes';
import {Response} from 'express';


app.use(routes);
app.use(cors());

app.engine('html', require('ejs').renderFile);

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    type: 'video/mp2t',
    setHeaders: function (res : Response, path : any , stat : any) {
      res.type('X-Content-Type-Option: nosniff')
    }
  }
  
app.use(express.static('public', options))
  

app.listen(4000)
