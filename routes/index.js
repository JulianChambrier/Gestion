var express = require('express');
var router = express.Router();
var model = require('../models/model.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  model.test(function (profils) {
    res.render('index', { title: 'index', profils : profils });
  })

});

router.get('/connexion', function(req, res, next) {
  res.render('connexion', { title: 'connexion' });
});

router.get('/inscription', function(req, res, next) {
  res.render('inscription', { title: 'inscription' });
});

router.get('/listecourse', function(req, res, next) {
  res.render('listecourse', { title: 'listecourse' });
});

router.get('/regles', function(req, res, next) {
  res.render('regles', { title: 'regles' });
});

router.get('/recette', function(req, res, next) {
  res.render('recette', { title: 'recette' });
});

module.exports = router;
