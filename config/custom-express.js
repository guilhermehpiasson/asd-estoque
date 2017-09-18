var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var morgan = require('morgan');
var logger = require('../servicos/logger.js');

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT || 3002);

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: 'application/json' }));

  app.use(expressValidator());

  consign()
   .include('routes')
   .then('persistencia')
   .into(app);

  return app;
}
