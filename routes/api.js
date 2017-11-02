//dependencies

var express = require('express');
var router = express.Router();

//model
var Product = require('./models/product');



// routes
Product.methods(['get','post','put','delete']);
Product.register(router, '/products');

//return router
module.exports = router;

